import React from "react";
import MyStore from "../../stores/MyStore";
import dogeImage from "../../../images/doge.jpg";
import ferryImage from "../../../images/ferry.jpg";
import svgImage from "../../../images/svg.svg";

export default class HelloBox extends React.Component {
	constructor(props){
		super(props);
		this.state = MyStore.getState();
	}

	componentDidMount(){
		MyStore.listen(this.onChange.bind(this));
		MyStore.fetchData();
	}

	componentWillUnmount(){
		MyStore.unlisten(this.onChange.bind(this));
	}

	onChange(state){
		this.setState(state);
	}

	render(){
		let titleEle = (<h1>{this.state.message}</h1>);
		let contentEle = this.state.data ? (<h2>{this.state.data}</h2>) : null;
		return (
			<div>
				<h1 className="box">Just a plain title there</h1>
				<img className="doge" src={dogeImage} />
				<img src={ferryImage} />
				<img src={svgImage} />
				{titleEle}
				{contentEle}
			</div>
		);
	}
}
