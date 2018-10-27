import * as actionsTypes from "../actions/actionsTypes";

export const initiateLogout = keycloak => {
  return {
    type: actionsTypes.AUTH_INITIATE_LOGOUT,
    keycloak: keycloak
  };
};
