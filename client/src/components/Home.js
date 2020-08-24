import React, { Component } from "react";

import { connect } from "react-redux";
// import { getUserData } from "../redux/actions/userActions";

export class Home extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Home</h1>
          Name: {this.props.user.name}
          Email: {this.props.user.email}
          <img src={this.props.user.imageUrl} alt="user" />
        </div>
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

export default connect(mapStateToProps)(Home);
