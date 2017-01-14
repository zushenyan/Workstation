import "!style!css!stylesheets/normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import {HelloWorld} from "./components/HelloWorld.jsx";

const app = document.getElementById("app");

ReactDOM.render(<HelloWorld text = {"weeeee"}/>, app);

if(process.env.NODE_ENV === "development"){
  if (module.hot) {
    module.hot.accept();
  }
}
