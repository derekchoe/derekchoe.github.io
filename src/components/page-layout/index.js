import React, { useState } from "react";
import View from "./style";

import Nav from "../nav";
import Footer from "../footer";
import Popover from "../popover";

// Utils
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const [isOpen, handleOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  return (
    <View isOpen={isOpen}>
      <Nav isOpen={isOpen} handleOpen={handleOpen} />
      {isOpen ? (
        <Popover handleOpen={handleOpen} path={path} />
      ) : (
        <div className="page-layout__container">{children}</div>
      )}
      <Footer isOpen={isOpen} />
    </View>
  );
};

export default PageLayout;
