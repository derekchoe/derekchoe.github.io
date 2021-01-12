import React from "react";
import View from "./style";

const Hamburger = ({ handleOpen, isOpen }) => (
  <View onClick={() => handleOpen(!isOpen)} isOpen={isOpen}>
    <div className="hamburger__menu-button">
      <div className="hamburger__line hamburger__line-first"></div>
      <div className="hamburger__line hamburger__line-second"></div>
      <div className="hamburger__line hamburger__line-third"></div>
    </div>
  </View>
);

export default Hamburger;
