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

{
  /* <a href="https://ibb.co/JsQ2J9w"><img src="https://i.ibb.co/P6Q4Hdv/IMG-0197.jpg" alt="IMG-0197" border="0"></a>
<a href="https://ibb.co/ByT9pBG"><img src="https://i.ibb.co/gStx2Jd/IMG-0215-Original.jpg" alt="IMG-0215-Original" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>pic see app</a><br /> */
}
