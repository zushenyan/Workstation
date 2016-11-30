import foobar from "./foobar.json";
import React from "react";
import ReactDOM from "react-dom";
import {HelloWorld} from "./components/HelloWorld.jsx";

import "./index.scss";

const app = document.getElementById("app");

ReactDOM.render(<HelloWorld text = {"weeeee"}/>, app);
