import { takeEvery } from "redux-saga/effects";
import { initiateLogoutSaga } from "./auth";

import * as actionsTypes from "../actions/actionsTypes";

export function* watchAuth() {
  yield takeEvery(actionsTypes.AUTH_INITIATE_LOGOUT, initiateLogoutSaga);
}
