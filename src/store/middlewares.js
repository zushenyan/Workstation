import { routerMiddleware } from "react-router-redux";
import createLogger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import createImmutableStateInvariant from "redux-immutable-state-invariant";

import history from "./history";

export const logger = createLogger({
  diff: true
});

export const router                  = routerMiddleware(history);
export const saga                    = createSagaMiddleware();
export const immutableStateInvariant = createImmutableStateInvariant();
