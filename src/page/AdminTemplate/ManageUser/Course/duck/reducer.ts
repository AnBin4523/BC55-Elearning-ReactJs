import {
  Action,
  AppState,
  AppStateAcount,
  DetailUser,
  RegistedCourse,
  Result,
  StateCourse,
} from "../../../../../type/type";
import * as ActionTypes from "./constant";
const myState: StateCourse<RegistedCourse> = {
  state: {
    loading: false,
    data: [],
    error: null,
  },
  state2: {
    loading: false,
    data: [],
    error: null,
  },
};

const registedCourseReducer = (state = myState, action: Action) => {
  switch (action.type) {
    case ActionTypes.COURSE_REGISTED_REQUEST: {
      state.state.loading = true;
      state.state.data = [];
      state.state.error = null;
      return { ...state };
    }

    case ActionTypes.COURSE_REGISTED_SUCCESS: {
      state.state.loading = false;
      state.state.data = action.payload;
      state.state.error = null;
      return { ...state };
    }

    case ActionTypes.COURSE_REGISTED_FAIL: {
      state.state.loading = false;
      state.state.data = [];
      state.state.error = action.payload;
      return { ...state };
    }
    case ActionTypes.COURSE_WAITTING_REQUEST: {
      state.state2.loading = true;
      state.state2.data = null;
      state.state2.error = null;
      return { ...state };
    }

    case ActionTypes.COURSE_WAITTING_SUCCESS: {
      state.state2.loading = false;
      state.state2.data = action.payload;
      state.state2.error = null;
      return { ...state };
    }

    case ActionTypes.COURSE_WAITTING_FAIL: {
      state.state2.loading = false;
      state.state2.data = null;
      state.state2.error = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default registedCourseReducer;
