import React from "react";
import ReactDOM from "react-dom";
// import App from "./javascript/App";
import {Router, Route, Link} from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

require("./stylesheets/index.scss");

class Box extends React.Component {
	render(){
		return (
			<div>weeeeeee</div>
		);
	}
}

class App extends React.Component {
	render(){
		return (
			<div>
				<h1>Hello</h1>
				<Link to="/meow">Click Me!</Link>
				{this.props.children}
			</div>
		);
	}
}

window.addEventListener("DOMContentLoaded", function(e){
	ReactDOM.render(
		<Router history={createBrowserHistory()}>
			<Route path="/" component={App}>
				<Route path="/meow" component={Box}/>
			</Route>
		</Router>
		, document.getElementById("app"));
});
