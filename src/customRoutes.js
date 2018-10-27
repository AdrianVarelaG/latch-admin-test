import React from "react";
import { Route } from "react-router-dom";
import OrganizationLogin from "./containers/OrganizationLogin";

export default [
  <Route exact path="/" component={OrganizationLogin} noLayout />
];
