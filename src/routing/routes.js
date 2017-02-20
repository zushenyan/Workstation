import React from "react";
import {
  Router,
  Route,
  IndexRoute
} from "react-router";
import { history } from "store";

import * as PATHS from "constants/paths";

const asyncComponentLoader = (componentName) => {
  return (location, cb) => {
    return import(`containers/${componentName}`)
      .then(module => cb(null, module.default))
      .catch(err => console.error(err));
  };
};

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
