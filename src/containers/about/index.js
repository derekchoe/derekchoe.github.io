import React, { useState } from "react";
import View from "./style";

import { ABOUT_CONFIG } from "./utils";
const { header, textArray } = ABOUT_CONFIG;

const IMAGE_MAP = {
  derek:
    "https://i.ibb.co/yqKRrgk/2-F7-A38-F7-1511-44-C3-8-D0-A-680-C26-E5-EC37.jpg",
  action: "https://i.ibb.co/P6Q4Hdv/IMG-0197.jpg",
  lakers: "https://i.ibb.co/gStx2Jd/IMG-0215-Original.jpg",
};

const About = () => {
  const [image, handleImage] = useState("derek");
  return (
    <View>
      <segment className="about__grid">
        <div className="about__text-container">
          <h2>{header}</h2>
          {textArray.map((text) => text(handleImage))}
        </div>
        <img className="about__image" alt={image} src={IMAGE_MAP[image]} />
      </segment>
    </View>
  );
};

export default About;
