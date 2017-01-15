import { routerMiddleware } from "react-router-redux";
import createLogger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import history from "./history";

export const logger = createLogger({
  stateTransformer: (state) => state.toJS(),
  diff:             true
});

export const router = routerMiddleware(history);

export const saga = createSagaMiddleware();
