import { getProductData } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import "swiper/css";

import Header from "./components/Header";
import LeftSlider from "./components/LeftSider";
import Banner from "./components/Banner";
import RightTopView from "./components/RightTopView";
import CenterTopIcon from "./components/CenterTopIcon";
import SecondView from "./components/SecondView";
import ThirdView from "./components/ThirdView";

function App() {
  return (
    <div>
      <div className="app-container">
        <Header></Header>
        <LeftSlider></LeftSlider>
        <Banner></Banner>
        <RightTopView></RightTopView>
        <CenterTopIcon></CenterTopIcon>
        <SecondView></SecondView>
        <ThirdView></ThirdView>
      </div>
    </div>
  );
}

export default App;
