import { USER_REQUEST, USER_SUCCESS, USER_FAIL, EDIT_USER } from "./contants";

const initialState = {
  loading: false,
  data: null,
  error: null,
  userEdit: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case USER_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case USER_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    case EDIT_USER: {
      state.userEdit = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
