import React from "react";
import {
  Router,
  Route,
  IndexRoute
} from "react-router";
import { history } from "store";
import asyncComponentLoader from "utils/async-component-loader";

import * as PATHS from "constants/paths";

export default (
  <Router history = {history}>
    <Route path = {PATHS.ROOT} getComponent = {asyncComponentLoader("MainPage")}>
      <IndexRoute getComponent = {asyncComponentLoader("HelloWorldPage")} />
      <Route path = {PATHS.HELLO_WORLD_PAGE} getComponent = {asyncComponentLoader("HelloWorldPage")} />
      <Route path = {PATHS.ASSETS_PAGE} getComponent = {asyncComponentLoader("AssetsPage")} />
      <Route path = {PATHS.API_PAGE} getComponent = {asyncComponentLoader("ApiPage")} />
      <Route path = {PATHS.COUNTER_PAGE} getComponent = {asyncComponentLoader("CounterPage")} />
    </Route>
  </Router>
);
