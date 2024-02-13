import { Action } from "../../../../../type/type";
import {
  DETAIL_COURSE_REQUEST,
  DETAIL_COURSE_SUCCESS,
  DETAIL_COURSE_FAIL,
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_FAIL,
  CLEAR_NOTE,
} from "./contants";

const initialState = {
  detailProduct: {
    loading: false,
    data: null,
    error: null,
  },
  registerCourse: {
    loading: false,
    data: null,
    error: null,
  },
};

const detaiProductReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DETAIL_COURSE_REQUEST: {
      state.detailProduct.loading = true;
      state.detailProduct.data = null;
      state.detailProduct.error = null;
      return { ...state };
    }

    case DETAIL_COURSE_SUCCESS: {
      state.detailProduct.loading = false;
      state.detailProduct.data = action.payload;
      state.detailProduct.error = null;
      return { ...state };
    }

    case DETAIL_COURSE_FAIL: {
      state.detailProduct.loading = false;
      state.detailProduct.data = null;
      state.detailProduct.error = action.payload;
      return { ...state };
    }
    case GET_REGISTER_REQUEST: {
      state.registerCourse.loading = true;
      state.registerCourse.data = null;
      state.registerCourse.error = null;
      return { ...state };
    }

    case GET_REGISTER_SUCCESS: {
      state.registerCourse.loading = false;
      state.registerCourse.data = action.payload;
      state.registerCourse.error = null;
      return { ...state };
    }

    case GET_REGISTER_FAIL: {
      state.registerCourse.loading = false;
      state.registerCourse.data = null;
      state.registerCourse.error = action.payload;
      return { ...state };
    }
    case CLEAR_NOTE: {
      state.registerCourse.loading = false;
      state.registerCourse.data = null;
      state.registerCourse.error = null;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default detaiProductReducer;
