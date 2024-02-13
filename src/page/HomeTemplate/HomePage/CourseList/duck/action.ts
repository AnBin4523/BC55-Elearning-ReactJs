import {
  COURSELIST_REQUEST,
  COURSELIST_SUCCESS,
  COURSELIST_FAIL,
} from "./contants";
import { api } from "../../../../../utils/api";
import { Result, Action, Course } from "../../../../../type/type";
import { actFetchEditCourse } from "../../../../AdminTemplate/ManageProduct/duck/action";

export const actFetchListCourse = (tenKhoaHoc = "") => {
  return (dispatch: any) => {
    dispatch(actListCourseRequest());
    if (tenKhoaHoc.trim() !== "") {
      api
        .get(
          `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP01`
        )
        .then((res: Result<Course>) => {
          if (res.status === 200) {
            dispatch(actListCourseSuccess(res.data));
            dispatch(actFetchEditCourse(null));
          }
        })
        .catch((err) => {
          dispatch(actListCourseFail(err));
        });
    } else {
      api
        .get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
        .then((res: Result<Course>) => {
          if (res.status === 200) {
            dispatch(actListCourseSuccess(res.data));
            dispatch(actFetchEditCourse(null));
          }
        })
        .catch((err) => {
          dispatch(actListCourseFail(err));
        });
    }
  };
};

export const actFetchSearch = (tenKhoaHoc = "", navigate: any) => {
  return (dispatch: any) => {
    dispatch(actListCourseRequest());
    if (tenKhoaHoc.trim() !== "") {
      api
        .get(
          `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP01`
        )
        .then((res: Result<Course>) => {
          if (res.status === 200) {
            dispatch(actListCourseSuccess(res.data));
            dispatch(actFetchEditCourse(null));
          }
        })
        .catch((err) => {
          dispatch(actListCourseFail(err));
          navigate("/timkiem/notfound", { replace: false });
        });
    }
  };
};

const actListCourseRequest = (): Action => {
  return {
    type: COURSELIST_REQUEST,
  };
};

const actListCourseSuccess = (data: Course[]): Action => {
  return {
    type: COURSELIST_SUCCESS,
    payload: data,
  };
};

const actListCourseFail = (error: any): Action => {
  return {
    type: COURSELIST_FAIL,
    payload: error,
  };
};
