import { fromJS } from "immutable";
import { LOCATION_CHANGE } from "react-router-redux";

const initState = fromJS({
  locationBeforeTransitions: null
});

const routerReducer = (state = initState, action) => {
  if(action.type === LOCATION_CHANGE){
    return state.set("locationBeforeTransitions", action.payload);
  }
  return state;
};

export default routerReducer;
