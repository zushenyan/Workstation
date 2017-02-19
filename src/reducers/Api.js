import * as ActionTypes from "actions/Api";

const initState = {
  data: {
    data:         null,
    error:        null,
    requestState: "ready",
  }
};

const apiReducer = (state = initState, action) => {
  switch(action.type){
    case ActionTypes.FETCH_DATA_LOADING: return {
      ...state,
      data: {
        ...state.data,
        requestState: "loading"
      }
    };
    case ActionTypes.FETCH_DATA_SUCCESS: return {
      ...state,
      data: {
        ...state.data,
        data:         action.payload,
        requestState: "success"
      }
    };
    case ActionTypes.FETCH_DATA_FAIL: return {
      ...state,
      data: {
        ...state.data,
        error:        action.payload,
        requestState: "fail"
      }
    };
    default: {
      return state;
    }
  }
};

export default apiReducer;
