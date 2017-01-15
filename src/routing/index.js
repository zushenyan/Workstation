import React from "react";
import {
  useRouterHistory,
  Router,
  Route,
  IndexRoute
} from "react-router";
import { createHashHistory } from "history";

import MainPage from "components/MainPage";
import HelloWorldPage from "components/HelloWorldPage";
import ImagePage from "components/ImagePage";
import ApiPage from "components/ApiPage";

import * as PATHS from "constants/paths";

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export default (
  <Router history = {appHistory}>
    <Route path = {PATHS.ROOT} component = {MainPage}>
      <IndexRoute component = {HelloWorldPage} />
      <Route path = {PATHS.HELLO_WORLD_PAGE} component = {HelloWorldPage} />
      <Route path = {PATHS.IMAGE_PAGE} component = {ImagePage} />
      <Route path = {PATHS.API_PAGE} component = {ApiPage} />
    </Route>
  </Router>
);
