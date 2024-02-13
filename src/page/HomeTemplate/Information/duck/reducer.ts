import {
  Action,
  AppState,
  AppStateAcount,
  DetailUser,
  Result,
} from "../../../../type/type";
import * as ActionTypes from "./constant";
interface State<T> {
  state: {
    loading: boolean;
    data: T | null;
    error: any;
  };
  state2: {
    loading: boolean;
    data: T | null;
    error: any;
  };
}
const myState: State<DetailUser> = {
  state: {
    loading: false,
    data: null,
    error: null,
  },
  state2: {
    loading: false,
    data: null,
    error: null,
  },
};

const detailUserReducer = (state = myState, action: Action) => {
  switch (action.type) {
    case ActionTypes.DETAIL_REQUEST: {
      state.state.loading = true;
      state.state.data = null;
      state.state.error = null;
      return { ...state };
    }

    case ActionTypes.DETAIL_SUCCESS: {
      state.state.loading = false;
      state.state.data = action.payload;
      state.state.error = null;
      return { ...state };
    }

    case ActionTypes.DETAIL_FAIL: {
      state.state.loading = false;
      state.state.data = null;
      state.state.error = action.payload;
      return { ...state };
    }
    case ActionTypes.DELETE_COURSE_REQUEST: {
      state.state2.loading = true;
      state.state2.data = null;
      state.state2.error = null;
      return { ...state };
    }

    case ActionTypes.DELETE_COURSE_SUCCESS: {
      state.state2.loading = false;
      state.state2.data = action.payload;
      state.state2.error = null;
      return { ...state };
    }

    case ActionTypes.DELETE_COURSE_FAIL: {
      state.state2.loading = false;
      state.state2.data = null;
      state.state2.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default detailUserReducer;
