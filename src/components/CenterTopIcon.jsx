import React, { useState } from 'react';
import left_icon_0 from "../asset/CenterTopIcon/0.png";
import left_icon_1 from "../asset/CenterTopIcon/1.png";
import left_icon_2 from "../asset/CenterTopIcon/2.png";
import left_icon_3 from "../asset/CenterTopIcon/3.png";
import left_icon_4 from "../asset/CenterTopIcon/4.png";
import left_icon_5 from "../asset/CenterTopIcon/5.png";
import left_icon_6 from "../asset/CenterTopIcon/6.png";
import left_icon_7 from "../asset/CenterTopIcon/7.png";

const centerTopIconItem = [
    { src: left_icon_0, title: "All(2024)" },
    { src: left_icon_1, title: "Slots" },
    { src: left_icon_2, title: "Fishing" },
    { src: left_icon_3, title: "Vivo" },
    { src: left_icon_4, title: "Viver" },
    { src: left_icon_5, title: "Favoritos" },
    { src: left_icon_6, title: "Recente" },
    { src: left_icon_7, title: "" },
];

const CenterTopIcon = () => {
    const [selectedIconIndex, setSelectedIconIndex] = useState(null);

    const handleIconClick = (index) => {
        setSelectedIconIndex(index === selectedIconIndex ? null : index);
    };

    return (
        <div className="icon-bar-container">
            {centerTopIconItem.slice(0, -1).map((item, index) => (
                <div
                    key={index}
                    className={`icon-item ${index === 0 ? 'first-icon' : ''} ${selectedIconIndex === index ? 'selected' : ''}`}
                    onClick={() => handleIconClick(index)}
                >
                    <img
                        src={item.src}
                        alt={item.title}
                        className={`icon-image ${selectedIconIndex === index ? 'orange-filter' : ''}`}
                    />
                    <span className="icon-title">{item.title}</span>
                </div>
            ))}
            {/* 添加一个额外的div来放置最后一张图标 */}
            <div className="last-icon-container">
                <div className="icon-item">
                    <img src={centerTopIconItem[centerTopIconItem.length - 1].src}
                        alt={centerTopIconItem[centerTopIconItem.length - 1].title}
                        className="icon-image" />
                    <span className="icon-title">{centerTopIconItem[centerTopIconItem.length - 1].title}</span>
                </div>
            </div>
        </div>
    );
};

export default CenterTopIcon;