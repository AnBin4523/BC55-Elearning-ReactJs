import { RegisterCourse, Action, Course } from "../../../../../type/type";
import {
  DETAIL_COURSE_REQUEST,
  DETAIL_COURSE_SUCCESS,
  DETAIL_COURSE_FAIL,
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_FAIL,
  CLEAR_NOTE,
} from "./contants";
import { api } from "../../../../../utils/api";
import { AppDispatch } from "../../../../../store";

export const actFetchDetailCourse = (maKhoaHoc: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(actCourseCategoryRequest());
    api
      .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
      .then((res: any) => {
        if (res.status === 200) {
          dispatch(actCourseCategorySuccess(res.data));
        }
      })
      .catch((err) => {
        dispatch(actCourseCategoryFail(err));
      });
  };
};

const actCourseCategoryRequest = (): Action => {
  return {
    type: DETAIL_COURSE_REQUEST,
  };
};

const actCourseCategorySuccess = (data: Course[]): Action => {
  return {
    type: DETAIL_COURSE_SUCCESS,
    payload: data,
  };
};

const actCourseCategoryFail = (error: any): Action => {
  return {
    type: DETAIL_COURSE_FAIL,
    payload: error,
  };
};

export const actGetRegisterCourse = (value: RegisterCourse) => {
  return (dispatch: AppDispatch) => {
    dispatch(actGetRegisterRequest());
    api
      .post("QuanLyKhoaHoc/DangKyKhoaHoc", value)
      .then((res) => {
        if (res.status === 200) {
          dispatch(actGetRegisterSuccess(res.data));
        }
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(actGetRegisterFail(err.response.data));
      });
  };
};

const actGetRegisterRequest = (): Action => {
  return {
    type: GET_REGISTER_REQUEST,
  };
};

const actGetRegisterSuccess = (data: string): Action => {
  return {
    type: GET_REGISTER_SUCCESS,
    payload: data,
  };
};

const actGetRegisterFail = (error: string): Action => {
  return {
    type: GET_REGISTER_FAIL,
    payload: error,
  };
};

export const actClearNote = (): Action => {
  return {
    type: CLEAR_NOTE,
  };
};
