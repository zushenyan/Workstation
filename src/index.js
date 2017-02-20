import "!style-loader!css-loader!stylesheets/normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import { store } from "store";
import Root from "routing";

ReactDOM.render(
  <Root store = {store} />,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept();
}
