import React from "react";
import View from "./style";

import { ABOUT_CONFIG } from "./utils";
const { header, textArray } = ABOUT_CONFIG;

const About = () => (
  <View>
    <h2>{header}</h2>
    {textArray.map((text) => {
      return text;
    })}
  </View>
);

export default About;
