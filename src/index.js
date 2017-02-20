import "!style-loader!css-loader!stylesheets/normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import { store } from "store";
import Root from "routing";

const render = (app) => {
  ReactDOM.render(
    app,
    document.getElementById("app")
  );
};

render(<Root store = {store} />);

if (module.hot) {
  module.hot.accept();
}
