import React from "react";
import View from "./style";

// Components
import NavLinkContainer from "./components/nav-link-container";
import Popover from "./components/popover";
import Hamburger from "../hamburger";

// Utils
import { NAV_CONFIG } from "../../utils/nav";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = ({ isOpen, handleOpen }) => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <View isOpen={isOpen}>
      <nav className="nav__container">
        <Link to="/">
          <img
            className="nav__profile"
            alt="profile"
            src="https://i.ibb.co/BcnvNND/me.png"
          />
        </Link>
        <NavLinkContainer path={path} navConfig={NAV_CONFIG} />
        <Hamburger isOpen={isOpen} handleOpen={handleOpen} />
        {isOpen && <Popover path={path} />}
      </nav>
    </View>
  );
};

export default Nav;
