import alt from "../Alt";
import MyAction from "../actions/MyAction";
import MySource from "../sources/MySource";

class MyStore {
	constructor(){
		this.data = null;
		this.message = "";
		this.bindActions(MyAction);
		this.registerAsync(MySource);
	}

	onFetchDataLoading(){
		console.log("fetching...");
		this.message = "fetching...";
	}

	onFetchDataSucceed(data){
		this.data = data;
		this.message = "success!";
	}

	onFetchDataError(errorMessage){
		this.message = "error!";
	}
}

export default alt.createStore(MyStore, "MyStore");
