import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAIL } from "./contants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CATEGORY_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case CATEGORY_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case CATEGORY_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default categoryReducer;
