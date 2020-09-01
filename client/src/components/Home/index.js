import React, { Component } from "react";
import { connect } from "react-redux";

import SlideShow from "../SlideShow";
import sbioffer from "../../assets/sbioffer.webp";
import deals from "../../assets/deals.webp";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <>
        <SlideShow />
        <div className="offerDiv">
          <a href="/shop/sbi10">
            <img src={sbioffer} alt="sbi-offer" />
          </a>
        </div>
        <div className="dealsDiv">
          <a href="/deals/10">
            <img src={deals} alt="deals" />
          </a>
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
