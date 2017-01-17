import "!style-loader!css-loader!stylesheets/normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import root from "routing";

ReactDOM.render(
  root,
  document.getElementById("app")
);

if(process.env.NODE_ENV === "development"){
  if (module.hot) {
    module.hot.accept();
  }
}
