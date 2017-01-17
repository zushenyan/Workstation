import React from "react";
import {
  Router,
  Route,
  IndexRoute
} from "react-router";
import { Provider } from "react-redux";
import {
  store,
  history
} from "store";

import MainPage from "containers/MainPage";
import HelloWorldPage from "containers/HelloWorldPage";
import AssetsPage from "containers/AssetsPage";
import ApiPage from "containers/ApiPage";
import CounterPage from "containers/CounterPage";

import * as PATHS from "constants/paths";

export default (
  <Provider store = {store}>
    <Router history = {history}>
      <Route path = {PATHS.ROOT} component = {MainPage}>
        <IndexRoute component = {HelloWorldPage} />
        <Route path = {PATHS.HELLO_WORLD_PAGE} component = {HelloWorldPage} />
        <Route path = {PATHS.ASSETS_PAGE} component = {AssetsPage} />
        <Route path = {PATHS.API_PAGE} component = {ApiPage} />
        <Route path = {PATHS.COUNTER_PAGE} component = {CounterPage} />
      </Route>
    </Router>
  </Provider>
);
