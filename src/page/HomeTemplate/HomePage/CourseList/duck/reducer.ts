import { Action, AppState, Course } from "../../../../../type/type";
import {
  COURSELIST_REQUEST,
  COURSELIST_SUCCESS,
  COURSELIST_FAIL,
} from "./contants";

const initialState: AppState<Course> = {
  loading: false,
  data: null,
  error: null,
};

const courseListReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case COURSELIST_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case COURSELIST_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case COURSELIST_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default courseListReducer;
