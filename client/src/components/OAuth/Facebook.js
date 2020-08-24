import React, { Component } from "react";
// import axios from "axios";
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUserData } from "../../redux/actions/userActions";

import FacebookLoginButton from "react-facebook-login";

export class Facebook extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: null,
      token: "",
      name: "",
      email: "",
      picture: "",
    };
  }

  facebookResponse = (response) => {
    console.log(response);
    // const { name, email } = response;
    // this.setState({ name, email });
    // const picture = response.picture.data.url;
    // this.setState({ picture });
    // this.props.setUserData({ name, email, picture });
    // const tokenBlob = new Blob(
    //   [JSON.stringify({ access_token: response.accessToken }, null, 2)],
    //   { type: "application/json" }
    // );
    // const options = {
    //   method: "POST",
    //   body: tokenBlob,
    //   mode: "cors",
    //   cache: "default",
    // };
    // const r = fetch("http://localhost:8080/api/v1/auth/facebook", options);
    // const token = r.headers.get("x-auth-token");
    // const user = r.json();
    // if (token) {
    //   this.setState({ isAuthenticated: true, user, token });
    // }
    // console.log("authenticated..");
    // console.log(user);
    // console.log(this.props.location);
    // this.props.history.push("/home");
  };

  render() {
    return (
      <>
        Name:{this.state.name} <br />
        Email:{this.state.email} <br />
        <img src={this.state.picture} alt="" />
        <FacebookLoginButton
          appId="382215059425804"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.facebookResponse}
        />
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { user } = state;
  return {
    user,
  };
}

const mapDispatchToProps = {
  setUserData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Facebook);
