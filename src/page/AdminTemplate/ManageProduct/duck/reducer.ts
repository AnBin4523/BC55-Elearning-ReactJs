import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  EDIT_PRODUCT,
  CONFIRM_USER,
} from "./contants";

const initialState = {
  loading: false,
  data: null,
  error: null,
  courseEdit: null,
  confirmCourse: null,
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCT_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case PRODUCT_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case PRODUCT_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    case EDIT_PRODUCT: {
      state.courseEdit = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default productReducer;
