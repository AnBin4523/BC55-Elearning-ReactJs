import { Action, AppState, Result } from "../../../../type/type";
import * as ActionTypes from "./constant";
import { NULL } from "sass";
const myState = {
  signUp: {
    loading: false,
    data: null,
    error: null,
  },
  logIn: {
    loading: false,
    data: null,
    error: null,
  },
};

const authReducer = (state = myState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SIGNUP_REQUEST: {
      state.signUp.loading = true;
      state.signUp.data = null;
      state.signUp.error = null;
      return { ...state };
    }

    case ActionTypes.SIGNUP_SUCCESS: {
      state.signUp.loading = false;
      state.signUp.data = action.payload;
      state.signUp.error = null;
      return { ...state };
    }

    case ActionTypes.SIGNUP_FAIL: {
      state.signUp.loading = false;
      state.signUp.data = null;
      state.signUp.error = action.payload;
      return { ...state };
    }
    case ActionTypes.LOGIN_REQUEST: {
      state.logIn.loading = true;
      state.logIn.data = null;
      state.logIn.error = null;
      return { ...state };
    }

    case ActionTypes.LOGIN_SUCCESS: {
      state.logIn.loading = false;
      state.logIn.data = action.payload;
      state.logIn.error = null;
      return { ...state };
    }

    case ActionTypes.LOGIN_FAIL: {
      state.logIn.loading = false;
      state.logIn.data = null;
      state.logIn.error = action.payload;
      return { ...state };
    }
    case ActionTypes.AUTH_LOGOUT: {
      state.logIn.loading = false;
      state.logIn.data = null;
      state.logIn.error = null;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default authReducer;
