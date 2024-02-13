import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAIL } from "./contants";
import { api } from "../../../../utils/api";
import { Action, Result } from "../../../../type/type";
import { CategoryType } from "./type";

export const actFetchCategory = () => {
  return (dispatch: any) => {
    dispatch(actCategoryRequest());
    api
      .get("QuanLyKhoaHoc/LayDanhMucKhoaHoc")
      .then((res: Result<CategoryType>) => {
        if (res.status === 200) {
          dispatch(actCategorySuccess(res.data));
        }
      })
      .catch((err) => {
        dispatch(actCategoryFail(err));
      });
  };
};

const actCategoryRequest = (): Action => {
  return {
    type: CATEGORY_REQUEST,
  };
};

const actCategorySuccess = (data: CategoryType[]): Action => {
  return {
    type: CATEGORY_SUCCESS,
    payload: data,
  };
};

const actCategoryFail = (error: any): Action => {
  return {
    type: CATEGORY_FAIL,
    payload: error,
  };
};
