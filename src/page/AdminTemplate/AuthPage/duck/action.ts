import * as ActionTypes from "./constant";
import { api } from "../../../../utils/api";
import {
  SignUp,
  Result,
  Action,
  Login,
  DataAuth,
  Error,
  ResultAcount,
} from "../../../../type/type";
import { AppDispatch } from "../../../../store";
import { NavigateFunction } from "react-router";
//phiên đăng nhập 60p
const expire = 60 * 60 * 1000;

export const actSignUp = (value: SignUp, navigate: NavigateFunction) => {
  return (dispatch: AppDispatch) => {
    dispatch(actSignUpRequest());
    api
      .post(`QuanLyNguoiDung/DangKy`, value)
      .then((result: Result<DataAuth>) => {
        if (result.status === 200) {
          alert("Bạn đã đăng ký thành công!");
          dispatch(actSignUpSuccess(result.data));
          dispatch(actLogin(value, navigate));
        }
      })
      .catch((error: string) => {
        dispatch(actSignUpFail(error));
      });
  };
};

export const actLogin = (value: Login, navigate: NavigateFunction) => {
  return (dispatch: AppDispatch) => {
    dispatch(actLoginRequest());
    api
      .post(`QuanLyNguoiDung/DangNhap`, value)
      .then((result: ResultAcount<DataAuth>) => {
        dispatch(actLoginSuccess(result.data));
        let user = result.data.maLoaiNguoiDung;
        if (user.trim() === "HV") {
          localStorage.setItem("USER_CUSTOMER", JSON.stringify(result.data));
          if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
          } else {
            navigate("/", { replace: false });
          }
        } else {
          localStorage.setItem("USER_ADMIN", JSON.stringify(result.data));
          navigate("/admin/sanpham", { replace: false });
        }
        let date = new Date().getTime();
        //setLocalStorage expire
        localStorage.setItem("expire", `${date + expire}`);
        // action timeout logout
        dispatch(timeoutLogout(expire, navigate));
      })
      .catch((error: Error) => {
        dispatch(actLoginFail(error.response?.data));
      });
  };
};

const timeoutLogout = (expire: number, navigate: NavigateFunction) => {
  return (dispatch: AppDispatch) => {
    setTimeout(() => {
      dispatch(actLogOut(navigate));
    }, expire);
  };
};
export const actTryLogin = (navigate: NavigateFunction) => {
  return (dispatch: AppDispatch) => {
    let user = null;
    if (localStorage.getItem("USER_ADMIN")) {
      user = JSON.parse(localStorage.getItem("USER_ADMIN") || "");
    } else if (localStorage.getItem("USER_CUSTOMER")) {
      user = JSON.parse(localStorage.getItem("USER_CUSTOMER") || "");
    }

    if (!user) return;

    const exp = Number(localStorage.getItem("expire"));
    const date = new Date().getTime();
    if (date > exp) {
      dispatch(actLogOut(navigate));
      return;
    }
    // neu thoi gian hien tai < thoi gian het han
    dispatch(timeoutLogout(exp - date, navigate));
    dispatch(actLoginSuccess(user));
  };
};
export const actLogOut = (navigate: NavigateFunction) => {
  alert("Phiên đăng nhập đã hết hạn");
  if (localStorage.getItem("USER_CUSTOMER")) {
    localStorage.removeItem("USER_CUSTOMER");
    navigate("/", { replace: true });
  } else if (localStorage.getItem("USER_ADMIN")) {
    localStorage.removeItem("USER_ADMIN");
    navigate("/auth", { replace: true });
  }
  localStorage.removeItem("expire");
  return {
    type: ActionTypes.AUTH_LOGOUT,
  };
};

const actSignUpRequest = () => {
  return {
    type: ActionTypes.SIGNUP_REQUEST,
  };
};

const actSignUpSuccess = (data: DataAuth[]) => {
  return {
    type: ActionTypes.SIGNUP_SUCCESS,
    payload: data,
  };
};
const actSignUpFail = (error: string) => {
  return {
    type: ActionTypes.SIGNUP_FAIL,
    payload: error,
  };
};

const actLoginRequest = () => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data: DataAuth) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};
const actLoginFail = (error: string) => {
  return {
    type: ActionTypes.LOGIN_FAIL,
    payload: error,
  };
};
