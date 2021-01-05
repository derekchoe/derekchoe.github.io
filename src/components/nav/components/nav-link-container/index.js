import React from "react";
import View, { StyledLink } from "./style";

const NavLinkContainer = ({ navConfig, path }) => (
  <View>
    {navConfig.map(({ title, href }) => {
      return (
        <li className="nav-link-container__link" key={title}>
          <StyledLink selected={href === path} to={href}>
            {title}
          </StyledLink>
        </li>
      );
    })}
  </View>
);

export default NavLinkContainer;
