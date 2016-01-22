import React from "react";
import HelloBox from "./components/HelloBox/HelloBox";

export default class App extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<HelloBox />
			</div>
		);
	}
}
