import React from 'react';
import Bg_0 from "../asset/CentenBg/Bg.png";
import Bg_1 from "../asset/CentenBg/Bg.png"; // 假设其他图片有不同的文件名  
import Bg_2 from "../asset/CentenBg/Bg.png";
import Bg_3 from "../asset/CentenBg/Bg.png";
import Bg_4 from "../asset/CentenBg/Bg.png";
import Bg_5 from "../asset/CentenBg/Bg.png";
import Bg_6 from "../asset/CentenBg/Bg.png";
import Bg_7 from "../asset/CentenBg/Bg.png";
import vector from "../asset/CenterTopIcon/6.png";

import arrow from "../asset/arrow.png";
import './css/thirdView.css';

const images = [
    { src: Bg_0, gameName: "待加游戏 1" },
    { src: Bg_1, gameName: "待加游戏 2" },
    { src: Bg_2, gameName: "待加游戏 3" },
    { src: Bg_3, gameName: "待加游戏 4" },
    { src: Bg_4, gameName: "待加游戏 5" },
    { src: Bg_5, gameName: "待加游戏 6" },
    { src: Bg_6, gameName: "待加游戏 7" },
    { src: Bg_7, gameName: "待加游戏 8" },
];

const ThirdView = () => {
    return (
        <div className="third-view-container">
            <div className="vector-icon-container">
                <img src={vector} alt="Vector Icon" />
                <span className="vector-text">Slots</span>
            </div>
            <div className="header-container">
                <div className="header-content">
                    <span>Ver tudo</span>
                    <img src={arrow} alt="Arrow Icon" />
                </div>
            </div>
            <div className="image-list">
                {images.map((image, index) => (
                    <div className="image-item" key={index}>
                        <img src={image.src} alt="" className="image" />
                        <span className="game-name">{image.gameName}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ThirdView;