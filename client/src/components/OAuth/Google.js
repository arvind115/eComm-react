import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";

import { connect } from "react-redux";
import { setUserData } from "../../redux/actions/userActions";

export class Google extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
    };
  }
  responseFailure = (data) => {
    console.log("some error occured while Google log in..");
    console.log(data);
  };
  responseGoogle = async (response) => {
    const { name, email, imageUrl } = response.profileObj;
    this.props.setUserData({ name, email, imageUrl });
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: response.accessToken }, null, 2)],
      { type: "application/json" }
    );
    const options = {
      method: "POST",
      body: tokenBlob,
      mode: "cors",
      cache: "default",
    };
    const r = await fetch("http://localhost:8080/api/v1/auth/google", options);
    const token = r.headers.get("x-auth-token");
    // const user = await r.json();
    if (token) {
      console.log("token recieved.");
      sessionStorage.setItem("jwt", token);
      // console.log(user);
      this.setState({ isAuthenticated: true });
    }
    // console.log("authenticated..");
  };
  render() {
    return this.state.authenticated ? (
      this.props.previous ? (
        <Redirect to={this.props.previous} />
      ) : (
        <p>Redirected to /home </p>
      )
    ) : (
      <GoogleLogin
        clientId="365980861837-9iih8cediglpeut3fj7kc8dtt5ovp6v4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseFailure}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return ownProps;
}

const mapDispatchToProps = {
  setUserData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Google);
