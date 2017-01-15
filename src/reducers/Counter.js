import { fromJS } from "immutable";
import * as ActionType from "actions/Counter";

const initState = fromJS({
  counter: 0
});

const counterReducer = (state = initState, action) => {
  switch(action.type){
    case ActionType.INC: return state.update("counter", v => v + 1);
    case ActionType.DEC: return state.update("counter", v => v - 1);
    default:             return state;
  }
};

export default counterReducer;
