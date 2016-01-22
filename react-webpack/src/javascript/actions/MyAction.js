import alt from "../Alt";

class MyAction {
	constructor(){
		this.generateActions(
			"fetchDataLoading",
			"fetchDataSucceed",
			"fetchDataError"
		);
	}
}

export default alt.createActions(MyAction);
