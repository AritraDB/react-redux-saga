import { call, put } from "redux-saga/effects";
import { getHttpUserData } from "../http-request/request";
import { setUser } from "../user";

export function* handleUserData(action: any) {
  try {
    const { data } = yield call(getHttpUserData);
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
