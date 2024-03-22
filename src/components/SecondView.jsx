import React, { useState, useRef } from 'react';
import Bg_0 from "../asset/CentenBg/Bg.png";
import Bg_1 from "../asset/CentenBg/Bg.png";
import Bg_2 from "../asset/CentenBg/Bg.png";
import Bg_3 from "../asset/CentenBg/Bg.png";
import Bg_4 from "../asset/CentenBg/Bg.png";
import Bg_5 from "../asset/CentenBg/Bg.png";
import Bg_6 from "../asset/CentenBg/Bg.png";
import Bg_7 from "../asset/CentenBg/Bg.png";
import vector from "../asset/CentenBg/vector.png";
import btn from "../asset/CentenBg/btn.png";
import ImageScroll from "./Tools/comment";
import './css/SecondView.css';

const images = [
    { src: Bg_0 },
    { src: Bg_1 },
    { src: Bg_2 },
    { src: Bg_3 },
    { src: Bg_4 },
    { src: Bg_5 },
    { src: Bg_6 },
    { src: Bg_7 },
];

const SecondView = () => {
    const scrollWrapperRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleBtnClick = () => {
        const scrollWrapper = scrollWrapperRef.current;
        const scrollAmount = scrollWrapper.scrollWidth / images.length;
        scrollWrapper.scrollLeft += scrollAmount;
    };

    return (
        <div className="second-view-container">
            <div className="vector-container">
                <img src={vector} alt="Vector Icon" className="vector-icon" />
            </div>
            <div className="hidden-scrollbar">
                <span>Recente</span>
            </div>
            <div className="image-scroll-container">
                <div className="image-scroll-wrapper"
                    ref={scrollWrapperRef} onScroll={e => handleScroll(e)}
                    style={{ scrollLeft: scrollLeft }}>
                    <ImageScroll images={images} />
                </div>
            </div>
            <div className="btn-container" >
                <img src={btn} alt="Button" className="btn-image" onClick={handleBtnClick} />
            </div>
        </div>
    );
};

const handleScroll = (e) => {
    console.log('sssssssssssssssss');
};

export default SecondView;