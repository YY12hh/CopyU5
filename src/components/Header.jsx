import bottomImage from "../asset/topView/bgheader.png";
import top_image_icon from "../asset/topView/top_image_icon.png";
import avatarBlock from "../asset/topView/avatarBlock.png";
import buttomIconBg from "../asset/topView/surfaceBg02-2.png";
import icon_refresh from "../asset/topView/icon_refresh.png";
import btnAddNurmal from "../asset/topView/btnAddNurmal.png";
import React, { useEffect, useReducer } from "react";
import top_image_message from "../asset/topView/Heroicons.png";
import top_image_message_dispaly from "../asset/topView/icon_bell.png";
import top_image_message_dispaly_red from "../asset/topView/imgRed.png";
import { useState } from "react";
import "swiper/css";

const Header = () => {
  const [lvValue, setLvValue] = useState(12);
  const [idValue, setIdValue] = useState(1216);
  const updateLvValue = (newValue) => {
    setLvValue(newValue);
  };
  const updateIdValue = (newValue) => {
    setIdValue(newValue);
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const countReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "minus":
        return state - 1;
      default:
        return;
    }
  };
  const [count, countDispatch] = useReducer(countReducer, 0);
  const [currentImage, setCurrentImage] = useState(top_image_message);
  const onClick = () => {
    countDispatch({ type: "add" });
    console.log({});
  };
  const handleImageClick = () => {
    setCurrentImage(
      currentImage === top_image_message
        ? top_image_message_dispaly
        : top_image_message_dispaly
    );
    onClick();
  };

  const [scale1, setScale1] = useState(false);
  const [scale2, setScale2] = useState(false);

  const handlebtnAddImageClick1 = () => {
    setScale1(true);

    setTimeout(() => {
      setScale1(false);
    }, 300);
  };

  const handlebtnAddImageClick2 = () => {
    setScale2(true);
    console.log("ss");
    setTimeout(() => {
      setScale2(false);
    }, 300);
  };
  return <div className="image-overlay-container">
    <img className="TitlebottomBg" src={bottomImage} />
    <img
      className="message"
      src={currentImage}
      alt="sa"
      onClick={handleImageClick}
      style={{ width: "48", heigt: "48" }}
    />
    <img
      src={top_image_message_dispaly_red}
      className="top_image_message_dispaly_red"
    ></img>
    <h3 className="lable">{count}</h3>

    {/* 玩家头像 */}
    <div className="info">
      <div className="info-Button"></div>
      <img className="info_head" src={top_image_icon}></img>
      <img className="info_head" src={avatarBlock}></img>
      <h1>
        LV:{lvValue}
        <br />
        ID:{idValue}
      </h1>
    </div>

    {/* 刷新钱 */}
    <div className="refreshMoney">
      <img className="info-Button-2" src={buttomIconBg} art="sss"></img>
      <img
        className="icon_refresh"
        src={icon_refresh}
        onClick={handlebtnAddImageClick1}
        style={{
          transform: `scale(${scale1 ? 1.2 : 1})`,
          transition: "transform 0.3s ease",
        }}
        alt="Add Normal Button"
      ></img>
      <h1>R${"(1200.0,00)"}</h1>
      <img
        className="btnAddNurmal"
        src={btnAddNurmal}
        onClick={handlebtnAddImageClick2}
        style={{
          transform: `scale(${scale2 ? 1.2 : 1})`,
          transition: "transform 0.3s ease",
        }}
        alt="Add Normal Button"
      />
    </div>
  </div>
}

export default Header;