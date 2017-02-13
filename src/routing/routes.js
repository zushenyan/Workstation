import React from "react";
import {
  Router,
  Route,
  IndexRoute
} from "react-router";
import { history } from "store";

import * as PATHS from "constants/paths";

// you can check https://webpack.js.org/guides/code-splitting/#on-demand-code-splitting
// for more advanced way to do async module importing.
// the duplicated codes and hard-coded path is necessary because bundle name changes after bundling.
// if you find this uncomfortable you might want to check bundle loader.
// https://github.com/webpack-contrib/bundle-loader
const MainPage = (location, cb) => {
  require.ensure([], (require) => {
    cb(null, require("containers/MainPage").default);
  }, "MainPage");
};

const HelloWorldPage = (location, cb) => {
  require.ensure([], (require) => {
    cb(null, require("containers/HelloWorldPage").default);
  }, "HelloWorldPage");
};

const AssetsPage = (location, cb) => {
  require.ensure([], (require) => {
    cb(null, require("containers/AssetsPage").default);
  }, "AssetsPage");
};

const ApiPage = (location, cb) => {
  require.ensure([], (require) => {
    cb(null, require("containers/ApiPage").default);
  }, "ApiPage");
};

const CounterPage = (location, cb) => {
  require.ensure([], (require) => {
    cb(null, require("containers/CounterPage").default);
  }, "CounterPage");
};

export default (
  <Router history = {history}>
    <Route path = {PATHS.ROOT} getComponent = {MainPage}>
      <IndexRoute getComponent = {HelloWorldPage} />
      <Route path = {PATHS.HELLO_WORLD_PAGE} getComponent = {HelloWorldPage} />
      <Route path = {PATHS.ASSETS_PAGE} getComponent = {AssetsPage} />
      <Route path = {PATHS.API_PAGE} getComponent = {ApiPage} />
      <Route path = {PATHS.COUNTER_PAGE} getComponent = {CounterPage} />
    </Route>
  </Router>
);
