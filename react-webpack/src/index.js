import React from "react";
import ReactDOM from "react-dom";
import App from "./javascript/App";

require("./stylesheets/index.scss");

window.addEventListener("DOMContentLoaded", function(e){
	ReactDOM.render(<App />, document.getElementById("app"));
});
