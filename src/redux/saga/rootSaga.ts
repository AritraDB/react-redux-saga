import { takeLatest } from "redux-saga/effects";
import { handleUserData } from "./handler";

export function* watcherSaga() {
  yield takeLatest("GET_USER", handleUserData);
}
