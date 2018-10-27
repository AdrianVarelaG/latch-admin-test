import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import Keycloak from "keycloak-js";
import axios from "axios";

/*const kc = Keycloak("/keycloak.json");
const token = localStorage.getItem("kc_token");
const refreshToken = localStorage.getItem("kc_refreshToken");

const updateLocalStorage = () => {
  localStorage.setItem("kc_token", kc.token);
  localStorage.setItem("kc_refreshToken", kc.refreshToken);
};

kc.init({ onLoad: "login-required", token, refreshToken }).then(
  authenticated => {
    if (authenticated) {
      updateLocalStorage();
      ReactDOM.render(<App kc={kc} />, document.getElementById("root"));
    }
  }
);

axios.interceptors.request.use(config =>
  kc
    .updateToken(5)
    .then(refreshed => {
      if (refreshed) {
        updateLocalStorage();
      }
      config.headers.Authorization = "Bearer " + kc.token;
      return Promise.resolve(config);
    })
    .catch(() => {
      kc.login();
    })
);*/

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
