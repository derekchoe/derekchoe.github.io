import React, { useState } from "react";
import View from "./style";

import Nav from "../nav";

const PageLayout = ({ children }) => {
  const [isOpen, handleOpen] = useState(false);

  return (
    <View isOpen={isOpen}>
      <Nav isOpen={isOpen} handleOpen={handleOpen} />
      {!isOpen && <div className="page-layout__container">{children}</div>}
    </View>
  );
};

export default PageLayout;
