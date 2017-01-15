import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUsers } from "api";

export const FETCH_DATA         = "API_FETCH_DATA";
export const FETCH_DATA_LOADING = "API_FETCH_DATA_LOADING";
export const FETCH_DATA_SUCCESS = "API_FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL    = "API_FETCH_DATA_FAIL";

export const fetchData        = () => ({ type: FETCH_DATA});
export const fetchDataLoading = () => ({ type: FETCH_DATA_LOADING });
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
export const fetchDataFail    = (error) => ({ type: FETCH_DATA_FAIL, payload: error });

export function* fetchDataSaga(){
  try {
    yield put(fetchDataLoading());
    const result = yield call(fetchUsers);
    yield put(fetchDataSuccess(result));
  }
  catch(e) {
    yield put(fetchDataFail(e));
  }
}

export function* watchFetchData(){
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}
