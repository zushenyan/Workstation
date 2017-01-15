import { delay } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

export const INC = "COUNTER_INC";
export const INC_ASYNC = "COUNTER_INC_ASYNC";
export const DEC = "COUNTER_DEC";
export const DEC_ASYNC = "COUNTER_DEC_ASYNC";

export const inc      = () => ({ type: INC });
export const incAsync = () => ({ type: INC_ASYNC });
export const dec      = () => ({ type: DEC });
export const decAsync = () => ({ type: DEC_ASYNC });

export function* incAsyncSaga(){
  yield call(delay, 2000);
  yield put(inc());
}

export function* decAsyncSaga(){
  yield call(delay, 2000);
  yield put(dec());
}

export function* watchIncAsync(){
  yield takeLatest(INC_ASYNC, incAsyncSaga);
}

export function* watchDecAsync(){
  yield takeLatest(DEC_ASYNC, decAsyncSaga);
}
