import { USER_REQUEST, USER_SUCCESS, USER_FAIL, EDIT_USER } from "./contants";
import { api } from "utils/api";
import { Result, Action, User } from "type/type";
import { toast } from "react-toastify";
import { NavigateFunction } from "react-router";

export const actFetchListUser = (taiKhoan = "") => {
  return (dispatch: any) => {
    dispatch(actUserRequest());
    if (taiKhoan.trim() !== "") {
      api
        .get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP02&tuKhoa=${taiKhoan}`)
        .then((res: Result<User>) => {
          if (res.status === 200) {
            console.log(res.data);
            dispatch(actUserSuccess(res.data));
            dispatch(actFetchEditUser(null));
          }
        })
        .catch((err) => {
          dispatch(actUserFail(err));
        });
    } else {
      api
        .get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP03`)
        .then((res: Result<User>) => {
          if (res.status === 200) {
            dispatch(actUserSuccess(res.data));
            dispatch(actFetchEditUser(null));
          }
        })
        .catch((err) => {
          dispatch(actUserFail(err));
        });
    }
  };
};

export const actAddUser = (user: User, navigate: NavigateFunction) => {
  return (dispatch: any) => {
    dispatch(actUserRequest());
    api
      .post("QuanLyNguoiDung/ThemNguoiDung", user)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Thêm người dùng thành công!");
          navigate("/admin/nguoidung", { replace: true });
        }
      })
      .catch((err) => {
        toast.error("Thao tác thất bại!");
        dispatch(actUserFail(err));
        console.log(err);
      });
  };
};

export const actDeleteUser = (taiKhoan: string) => {
  return (dispatch: any) => {
    api
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
      .then((res) => {
        toast.success("Xóa user thành công!");
        dispatch(actFetchListUser());
      })
      .catch((error) => {
        console.log(error);
        toast.warn(`Không xóa được vì : ${error.response.data}`);
      });
  };
};

export const actFetchEditUser = (taiKhoan: any) => {
  return (dispatch: any) => {
    api
      .get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP02&tuKhoa=${taiKhoan}`)
      .then((res) => {
        dispatch(actEditUser(res.data[0]));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const actUpdateUser = (user: User, navigate: NavigateFunction) => {
  return (dispatch: any) => {
    api
      .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Cập nhật thành công!");
          dispatch(actFetchEditUser(null));
          dispatch(actFetchListUser());
          navigate("/admin/nguoidung");
        }
      })
      .catch((error) => {
        toast.warn(`Không update được vì : ${error.response.data}`);
        console.log(error.response);
      });
  };
};

const actUserRequest = (): Action => {
  return {
    type: USER_REQUEST,
  };
};

const actUserSuccess = (data: User[]): Action => {
  return {
    type: USER_SUCCESS,
    payload: data,
  };
};

const actUserFail = (error: any): Action => {
  return {
    type: USER_FAIL,
    payload: error,
  };
};

const actEditUser = (user: any) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};
