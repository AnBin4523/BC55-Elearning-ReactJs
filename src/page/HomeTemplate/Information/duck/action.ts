import * as ActionTypes from "./constant";
import { Action, ResultAcount, DetailUser, RegisterCourse } from "type/type";
import { AppDispatch } from "../../../../store";
import { api } from "../../../../utils/api";

export const actDetailUser = () => {
  return (dispatch: AppDispatch) => {
    dispatch(actDetailUserRequest());
    api
      .post("QuanLyNguoiDung/ThongTinTaiKhoan")
      .then((result: ResultAcount<DetailUser>) => {
        if (result.status === 200) {
          dispatch(actDetailUserSuccess(result.data));
        }
      })
      .catch((error: string) => {
        dispatch(actDetailUserFail(error));
      });
  };
};

const actDetailUserRequest = (): Action => {
  return {
    type: ActionTypes.DETAIL_REQUEST,
  };
};

const actDetailUserSuccess = (data: DetailUser): Action => {
  return {
    type: ActionTypes.DETAIL_SUCCESS,
    payload: data,
  };
};
const actDetailUserFail = (error: string): Action => {
  return {
    type: ActionTypes.DETAIL_FAIL,
    payload: error,
  };
};

export const actDeleteCourse = (value: RegisterCourse) => {
  return (dispatch: AppDispatch) => {
    dispatch(actDeleteCourseRequest());
    api
      .post("QuanLyKhoaHoc/HuyGhiDanh", value)
      .then((result) => {
        if (result.status === 200) {
          dispatch(actDeleteCourseSuccess(result.data));
          dispatch(actDetailUser());
        }
      })
      .catch((error) => {
        dispatch(actDeleteCourseFail(error.response.data));
      });
  };
};

const actDeleteCourseRequest = (): Action => {
  return {
    type: ActionTypes.DELETE_COURSE_REQUEST,
  };
};

const actDeleteCourseSuccess = (data: string): Action => {
  return {
    type: ActionTypes.DELETE_COURSE_SUCCESS,
    payload: data,
  };
};
const actDeleteCourseFail = (error: string): Action => {
  return {
    type: ActionTypes.DELETE_COURSE_FAIL,
    payload: error,
  };
};
