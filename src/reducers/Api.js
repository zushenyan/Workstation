import { fromJS } from "immutable";
import * as ActionTypes from "actions/Api";

const initState = fromJS({
  data: {
    data:         null,
    error:        null,
    requestState: "ready",
  }
});

const apiReducer = (state = initState, action) => {
  switch(action.type){
    case ActionTypes.FETCH_DATA_LOADING: {
      return state.setIn(["data", "requestState"], "loading");
    }
    case ActionTypes.FETCH_DATA_SUCCESS: {
      return state.setIn(["data", "requestState"], "success")
        .setIn(["data", "data"], action.payload);
    }
    case ActionTypes.FETCH_DATA_FAIL: {
      return state.setIn(["data", "requestState"], "fail")
        .setIn(["data", "error"], action.payload);
    }
    default: {
      return state;
    }
  }
};

export default apiReducer;
