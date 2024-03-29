import React from "react";

const LeftSidePanel = ({
  isMinimized,
  imgSrc,
  btnSrc,
  btnAlt,
  btnOnClick,
  className,
  children,
}) => {
  return (
    <div className={className}>
      <img src={imgSrc} alt="Logo" />
      <button src={btnSrc} alt={btnAlt} onClick={btnOnClick}>
        {isMinimized ? "Maximize" : "Minimize"}
      </button>
      {!isMinimized && <div className="centent_icon">{children}</div>}
    </div>
  );
};

export default LeftSidePanel;
