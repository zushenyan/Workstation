import * as ActionType from "actions/Counter";

const initState = {
  counter: 0
};

const counterReducer = (state = initState, action) => {
  switch(action.type){
    case ActionType.INC: return { ...state, counter: state.counter + 1};
    case ActionType.DEC: return { ...state, counter: state.counter - 1};
    default:             return state;
  }
};

export default counterReducer;
