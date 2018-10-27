import React from "react";
import { connect } from "react-redux";
import { Responsive } from "react-admin";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ExitIcon from "@material-ui/icons/PowerSettingsNew";

import * as actions from "../store/actions/index";

const Logout = ({ userLogout, keycloak, ...rest }) => (
  <Responsive
    xsmall={
      <MenuItem onClick={() => userLogout(keycloak)} {...rest}>
        <ExitIcon /> Logout
      </MenuItem>
    }
    medium={
      <Button onClick={() => userLogout(keycloak)} size="small" {...rest}>
        <ExitIcon /> Logout
      </Button>
    }
  />
);

const mapDispatchToProps = dispatch => {
  return {
    userLogout: keycloak => dispatch(actions.initiateLogout(keycloak))
  };
};

const mapStateToProps = state => {
  return {
    keycloak: state.auth.keycloak
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
