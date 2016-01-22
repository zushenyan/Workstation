import MyAction from "../actions/MyAction";

const MySource = {
	fetchData: {
		remote(state){
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					let num = Math.floor(Math.random() * 2);
					let result = num === 0 ? true : false;
					if(result){
						resolve("I am a very new data!");
					}
					else{
						reject("something went wrong!");
					}
				}, 2000);
			});
		},
		loading: MyAction.fetchDataLoading,
		success: MyAction.fetchDataSucceed,
		error: MyAction.fetchDataError
	}
};

export default MySource;
