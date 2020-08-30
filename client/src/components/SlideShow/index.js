import React, { Component } from "react";

import "./SlideShow.css";

import Slideshow from "./Slideshow";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";

const s = {
  container: "screenW screenH dGray col",
  main: "flex8 white",
};

const slides = [slide1, slide2, slide3, slide4];

class SlideShowPresentor extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.main}>
          <Slideshow slides={slides} />
        </div>
      </div>
    );
  }
}

export default SlideShowPresentor;
