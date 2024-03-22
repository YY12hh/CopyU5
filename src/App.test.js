import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isSliding) {
        slideRight();
      }
    }, 3000);
  });

  const slideRight = () => {
    setIsSliding(true); // 开始滑动
    const nextIndex = (activeIndex + 1) % images.length;

    setTimeout(() => {
      setIsSliding(false); // 滑动结束
    }, 500);
  };

  const sliderLeft = () => {
    setIsSliding(true); // 开始滑动s
    const prevIndex = (activeIndex - 1) % images.length;
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key == "ArrowLeft") {
        sliderLeft();
      } else if (event.key === "ArrowRight") {
        slideRight();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
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
          <img
            src={images[activeIndex].sr}
            alt={images[activeIndex].title}
          ></img>
        </div>
      </CSSTransition>
    </div>
  );
};
