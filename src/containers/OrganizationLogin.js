import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/index";

class OrganizationLogin extends Component {
  componentDidMount() {
    if (!this.props.keycloak) {
      window.location.reload();
      /* this.props.keycloak.logout();
      this.props.onLogout();*/
    }
  }

  submit = e => {
    e.preventDefault();
    // gather your data/credentials here
  };

  logout() {
    this.props.onLogout(this.props.keycloak);
  }

  render() {
    return this.props.keycloak && this.props.keycloak.authenticated ? (
      <form onSubmit={this.submit}>
        <h1>EmpresasLogin</h1>
        <button onClick={() => this.logout()}>Logout</button>
        <button>
          <Link to="customers">customers</Link>
        </button>
      </form>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    keycloak: state.auth.keycloak
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: keycloak => dispatch(actions.initiateLogout(keycloak))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationLogin);
