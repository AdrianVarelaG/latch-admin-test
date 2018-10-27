import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import { userLogout } from "react-admin";

export function* initiateLogoutSaga(action) {
  yield localStorage.removeItem("kc_token");
  yield localStorage.removeItem("kc_refreshToken");

  yield action.keycloak.logout();
  yield put(userLogout("/"));
  // yield action.keycloak.logout();
  // yield put(actions.logoutSucceed());
}
