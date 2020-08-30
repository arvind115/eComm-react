import React, { Component } from "react";

import { connect } from "react-redux";
import SlideShow from "./SlideShow";
// import { getUserData } from "../redux/actions/userActions";

export class Home extends Component {
  render() {
    return <SlideShow />;
  }
}

function mapStateToProps(state, ownProps) {
  const { user } = state;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Home);
