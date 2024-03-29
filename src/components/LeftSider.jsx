

import React, { useState } from "react";
import LeftSidePanel from "./LeftSidePanel";
import logo from "../asset/leftView/logo.png";
import btn_left from "../asset/leftView/btn_left.png";
import btn_right from "../asset/leftView/btn_right.png";

const LeftSlider = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleBtnClick = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <LeftSidePanel
      isMinimized={isMinimized}
      imgSrc={logo}
      btnSrc={isMinimized ? btn_right : btn_left}
      btnAlt={isMinimized ? "Maximize" : "Minimize"}
      btnOnClick={handleBtnClick}
      className={isMinimized ? "MainLeftMinification" : "MainLeftDetails"}
    />
  );
};

export default LeftSlider;
