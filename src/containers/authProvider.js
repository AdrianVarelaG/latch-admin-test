import { AUTH_LOGIN, AUTH_CHECK, AUTH_ERROR } from "react-admin";

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request("https://mydomain.com/authenticate", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem("token", token);
      });
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem("kc_token")
      ? Promise.resolve()
      : Promise.reject();
  }
  if (type === AUTH_ERROR) {
    const status = params.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("kc_token");
      return Promise.reject();
    }
    return Promise.resolve();
  }
  return Promise.resolve();
};
