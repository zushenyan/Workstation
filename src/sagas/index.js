import {
  watchIncAsync,
  watchDecAsync
} from "actions/Counter";
import {
  watchFetchData
} from "actions/Api";

export default function* rootSaga(){
  yield [
    watchIncAsync(),
    watchDecAsync(),
    watchFetchData()
  ];
}
