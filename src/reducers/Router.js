import { LOCATION_CHANGE } from "react-router-redux";

const initState = {
  locationBeforeTransitions: null
};

const routerReducer = (state = initState, action) => {
  if(action.type === LOCATION_CHANGE){
    return {
      ...state,
      locationBeforeTransitions: action.payload
    };
  }
  return state;
};

export default routerReducer;
