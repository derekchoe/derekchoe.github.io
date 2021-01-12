import React from "react";
import View, { StyledLink } from "./style";

import { NAV_CONFIG } from "../../../../utils/nav";

const Popover = ({ path, handleOpen }) => (
  <View>
    <ul className="popover__container">
      {NAV_CONFIG.map(({ href, title }) => (
        <li className="popover__link-wrapper" key={title}>
          <StyledLink
            onClick={() => handleOpen(false)}
            selected={path === href}
            to={href}
          >
            {title}
          </StyledLink>
        </li>
      ))}
    </ul>
  </View>
);

export default Popover;
