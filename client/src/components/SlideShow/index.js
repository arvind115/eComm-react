import React, { Component } from "react";

import "./SlideShow.css";

import Slideshow from "./Slideshow";
import slide1 from "../../assets/banner1.jpg";
import slide2 from "../../assets/banner2.webp";
import slide3 from "../../assets/banner3.webp";
import slide4 from "../../assets/banner4.webp";
import slide5 from "../../assets/banner5.webp";

const s = {
  container: "screenW screenH dGray col",
  main: "flex8 white",
};

const slides = [slide1, slide2, slide3, slide4,slide5];

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
