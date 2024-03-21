import { useRef, useEffect, useState, useReducer } from "react";
import logo from "../asset/leftView/logo.png";
import btn_left from "../asset/leftView/btn_left.png";
import btn_right from "../asset/leftView/btn_right.png";
const LeftSlider = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const handleBtn_left = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div>
      {/* 当isMinimized为false时显示MainLeftDetails，否则不显示 */}
      {!isMinimized && (
        <div className="MainLeftDetails fixed-element">
          <img src={logo} />
          <img
            className="btn_left"
            src={btn_left}
            onClick={handleBtn_left}
            alt="Minimize"
          />
        </div>
      )}

      {/* 当isMinimized为true时显示MainLeftMinification，否则不显示 */}
      {isMinimized && (
        <div className="MainLeftMinification fixed-element">
          <img src={logo} />
          <img
            className="btn_right"
            src={btn_right}
            onClick={handleBtn_left}
            alt="Maximize"
          />
          <div className="centent_icon"></div>
        </div>
      )}
    </div>
  )
};

export default LeftSlider;