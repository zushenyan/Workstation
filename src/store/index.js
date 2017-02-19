import {
  createStore,
  applyMiddleware
} from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "reducers";
import rootSaga from "sagas";

import immatureHistory from "./history";
import {
  logger,
  router,
  saga,
  immutableStateInvariant
} from "./middlewares";

const middlewareEnhancer = (() => {
  if(process.env.NODE_ENV === "development"){
    return composeWithDevTools(applyMiddleware(
      saga,
      router,
      immutableStateInvariant,
      logger
    ));
  }
  return applyMiddleware(saga, router);
})();

const store = createStore(rootReducer, undefined, middlewareEnhancer);

const history = syncHistoryWithStore(immatureHistory, store);

saga.run(rootSaga);

export {
  store,
  history
};
