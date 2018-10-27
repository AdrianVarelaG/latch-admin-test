import * as actionsTypes from "../actions/actionsTypes";
import { updateObject } from "../../shared/utility";

const initialSate = {
  keycloak: null
};

const authLogoutSuccess = (state, action) => {
  return updateObject(state, { keycloak: null, logout: false });
};

const authLogout = (state, action) => {
  return updateObject(state, { logout: true });
};

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case actionsTypes.AUTH_LOGOUT_SUCCESS:
      return authLogoutSuccess(state, action);
    case actionsTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
