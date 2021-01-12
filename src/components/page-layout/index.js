import React, { useState } from "react";
import View from "./style";

import Nav from "../nav";

import { FOOTER_CONFIG } from "../../utils/footer";

const PageLayout = ({ children }) => {
  const [isOpen, handleOpen] = useState(false);

  return (
    <View isOpen={isOpen}>
      <Nav isOpen={isOpen} handleOpen={handleOpen} />
      {!isOpen && <div className="page-layout__container">{children}</div>}
      <footer className="page-layout__footer-container">
        <ul className="page-layout__footer">
          {FOOTER_CONFIG.map(({ href, text, icon }) => {
            return (
              <li key={text}>
                <a href={href}>
                  <img
                    className="page-layout__footer-image"
                    src={icon}
                    alt={text}
                  ></img>
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </View>
  );
};

export default PageLayout;
