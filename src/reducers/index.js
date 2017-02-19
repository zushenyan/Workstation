import { combineReducers } from "redux";

import counter from "./Counter";
import api from "./Api";
import routing from "./Router";

export default combineReducers({
  counter,
  api,
  routing
});
