import {
  COURSE_CATEGORY_SUCCESS,
  COURSE_CATEGORY_REQUEST,
  COURSE_CATEGORY_FAIL,
} from "./contants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const courseCategoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COURSE_CATEGORY_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case COURSE_CATEGORY_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case COURSE_CATEGORY_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default courseCategoryReducer;
