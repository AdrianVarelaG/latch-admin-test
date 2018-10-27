import React from "react";
import "./App.css";

import { Admin, Resource } from "react-admin";
import jsonServerProvider from "./dataProvider";
import createHistory from "history/createBrowserHistory";
import authProvider from "./containers/authProvider";
import Logout from "./containers/Logout";
import customRoutes from "./customRoutes";

import AuthReducer from "./store/reducers/auth";
import { watchAuth } from "./store/sagas";
import axios from "axios";

import {
  CustomerList,
  CustomerCreate,
  CustomerEdit,
  CustomerShow
} from "./catalogs/customers";

const history = createHistory();

const httpClient = (url, options = {}) => {
  return axios({ url: url, ...options });
};

const dataProvider = jsonServerProvider("http://localhost:4001", httpClient);

const App = props => (
  <Admin
    customRoutes={customRoutes}
    customSagas={[watchAuth]}
    customReducers={{ auth: AuthReducer }}
    //loginPage={MyLoginPage}
    logoutButton={Logout}
    authProvider={authProvider}
    history={history}
    dataProvider={dataProvider}
    initialState={{ auth: { keycloak: props.kc } }}
  >
    <Resource
      name="customers"
      list={CustomerList}
      create={CustomerCreate}
      show={CustomerShow}
      edit={CustomerEdit}
    />
  </Admin>
);
export default App;
