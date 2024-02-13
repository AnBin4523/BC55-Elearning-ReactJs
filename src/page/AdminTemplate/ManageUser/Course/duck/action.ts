import * as ActionTypes from "./constant";
import {
  Action,
  ResultAcount,
  RegistedCourse,
  Result,
  ComfirmCourse,
} from "type/type";
import { AppDispatch } from "store";
import { api } from "utils/api";
import { toast } from "react-toastify";
export const actCourseRegisted = (id: {}) => {
  return (dispatch: AppDispatch) => {
    dispatch(actCourseRegistedRequest());
    api
      .post("QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet", id)
      .then((result: Result<RegistedCourse>) => {
        if (result.status === 200) {
          dispatch(actCourseRegistedSuccess(result.data));
        }
      })
      .catch((error: string) => {
        dispatch(actCourseRegistedFail(error));
      });
  };
};
export const actDenyCourseRegisted = (value: ComfirmCourse) => {
  return (dispatch: AppDispatch) => {
    api
      .post("QuanLyKhoaHoc/HuyGhiDanh", value)
      .then((result) => {
        if (result.status === 200) {
          dispatch(actCourseRegisted({ taiKhoan: value.taiKhoan }));
          dispatch(actWaittingCourse({ taiKhoan: value.taiKhoan }));
          toast.success(result.data);
        }
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };
};

const actCourseRegistedRequest = (): Action => {
  return {
    type: ActionTypes.COURSE_REGISTED_REQUEST,
  };
};

const actCourseRegistedSuccess = (data: RegistedCourse[]): Action => {
  return {
    type: ActionTypes.COURSE_REGISTED_SUCCESS,
    payload: data,
  };
};
const actCourseRegistedFail = (error: string): Action => {
  return {
    type: ActionTypes.COURSE_REGISTED_FAIL,
    payload: error,
  };
};
export const actWaittingCourse = (id: {}) => {
  return (dispatch: AppDispatch) => {
    dispatch(actWaittingCourseRequest());
    api
      .post("QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet", id)
      .then((result: Result<RegistedCourse>) => {
        if (result.status === 200) {
          dispatch(actWaittingCourseSuccess(result.data));
        }
      })
      .catch((error: string) => {
        dispatch(actWaittingCourseFail(error));
      });
  };
};
export const actAcceptWaittingCourse = (value: ComfirmCourse) => {
  return (dispatch: AppDispatch) => {
    api
      .post("QuanLyKhoaHoc/GhiDanhKhoaHoc", value)
      .then((result) => {
        if (result.status === 200) {
          dispatch(actWaittingCourse({ taiKhoan: value.taiKhoan }));
          dispatch(actCourseRegisted({ taiKhoan: value.taiKhoan }));
          toast.success(result.data);
        }
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };
};

const actWaittingCourseRequest = (): Action => {
  return {
    type: ActionTypes.COURSE_WAITTING_REQUEST,
  };
};

const actWaittingCourseSuccess = (data: RegistedCourse[]): Action => {
  return {
    type: ActionTypes.COURSE_WAITTING_SUCCESS,
    payload: data,
  };
};
const actWaittingCourseFail = (error: string): Action => {
  return {
    type: ActionTypes.COURSE_WAITTING_FAIL,
    payload: error,
  };
};
