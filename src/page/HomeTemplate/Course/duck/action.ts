import {
  COURSE_CATEGORY_SUCCESS,
  COURSE_CATEGORY_REQUEST,
  COURSE_CATEGORY_FAIL,
} from "./contants";
import { api } from "../../../../utils/api";
import { Action, Course, Result } from "../../../../type/type";

export const actFetchCourseCategory = (maDanhMuc: any) => {
  return (dispatch: any) => {
    dispatch(actCourseCategoryRequest());
    api
      .get(
        `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`
      )
      .then((res: Result<Course>) => {
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
    type: COURSE_CATEGORY_REQUEST,
  };
};

const actCourseCategorySuccess = (data: Course[]): Action => {
  return {
    type: COURSE_CATEGORY_SUCCESS,
    payload: data,
  };
};

const actCourseCategoryFail = (error: any): Action => {
  return {
    type: COURSE_CATEGORY_FAIL,
    payload: error,
  };
};
