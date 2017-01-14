import React from "react";
import {
  browserHistory,
  Router,
  Route,
  IndexRoute
} from "react-router";

import MainPage from "components/MainPage";
import HelloWorldPage from "components/HelloWorldPage";
import ImagePage from "components/ImagePage";
import ApiPage from "components/ApiPage";

import * as PATHS from "constants/paths";

export default (
  <Router history = {browserHistory}>
    <Route path = {PATHS.ROOT} component = {MainPage}>
      <IndexRoute component = {HelloWorldPage} />
      <Route path = {PATHS.HELLO_WORLD_PAGE} component = {HelloWorldPage} />
      <Route path = {PATHS.IMAGE_PAGE} component = {ImagePage} />
      <Route path = {PATHS.API_PAGE} component = {ApiPage} />
    </Route>
  </Router>
);
