import React from "react";
import View from "./style";

import { FOOTER_CONFIG } from "../../utils/footer";

const Footer = ({ isOpen }) => (
  <View isOpen={isOpen}>
    <ul className="footer__container">
      {FOOTER_CONFIG.map(({ href, text, icon }) => {
        return (
          <li key={text}>
            <a href={href}>
              <img className="footer__image" src={icon} alt={text}></img>
            </a>
          </li>
        );
      })}
    </ul>
  </View>
);

export default Footer;
