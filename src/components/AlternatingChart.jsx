import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import banner_about from "../asset/alternatingChart/banner_about.png";
import banner_checkin from "../asset/alternatingChart/banner_checkin.png";
import banner_primeira_recarga from "../asset/alternatingChart/banner_primeira_recarga.png";
import banner_recommend from "../asset/alternatingChart/banner_recommend.png";
import banner_vip from "../asset/alternatingChart/banner_vip.png";

import "./css/AlternatingChart.js";

const images = [
    { src: banner_about, title: "About" },
    { src: banner_checkin, title: "Check-in" },
    { src: banner_primeira_recarga, title: "Primeira Recarga" },
    { src: banner_recommend, title: "Recommend" },
    { src: banner_vip, title: "VIP" },
];

const AlternatingChart = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    // 设置定时器  
    useEffect(() => {
        const timer = setInterval(() => {
            if (!isSliding) {
                slideRight();
            }
        }, 3000); // 每3秒滑动一次  

        return () => clearInterval(timer); // 清除定时器  
    }, [isSliding]);

    // 滑动到下一个图片  
    const slideRight = () => {
        setIsSliding(true); // 开始滑动  
        const nextIndex = (activeIndex + 1) % images.length;
        setActiveIndex(nextIndex);

        // 假设滑动动画的时长为500ms  
        setTimeout(() => {
            setIsSliding(false); // 滑动结束  
        }, 500);
    };

    // 滑动到上一个图片  
    const slideLeft = () => {
        setIsSliding(true); // 开始滑动  
        const prevIndex = (activeIndex - 1 + images.length) % images.length;
        setActiveIndex(prevIndex);

        // 假设滑动动画的时长为500ms  
        setTimeout(() => {
            setIsSliding(false); // 滑动结束  
        }, 500);
    };

    // 处理键盘左右键事件  
    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.key === 'ArrowLeft') {
                slideLeft();
            } else if (event.key === 'ArrowRight') {
                slideRight();
            }
        };

        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    return (
        <div className="slider">
            <CSSTransition
                key={images[activeIndex].title}
                timeout={500}
                classNames="fade"
            >
                <div className="slide">
                    <img src={images[activeIndex].src} alt={images[activeIndex].title} />
                    <span className="slide-title">{images[activeIndex].title}</span>
                </div>
            </CSSTransition>
        </div>
    );
};

export default AlternatingChart;