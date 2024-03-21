import { useRef, useEffect, useState, useReducer } from "react";
import Product from "./components/product";
import { getProductData } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import "swiper/css";

import Header from "./components/Header";
import LeftSlider from "./components/LeftSider";
import AlternatingChart from "./components/AlternatingChart";
import RightTopView from "./components/RightTopView";
import CenterTopIcon from "./components/CenterTopIcon";
import SecondView from "./components/SecondView";
import ThirdView from "./components/ThirdView";

/**
 * 提供基于时间间隔重复调用callback的hoos
 * @param {*} callback
 * @param {*} interval
 */
function useInterval(callback, interval) {
  useEffect(() => {
    const start = new Date().getTime();
    const I = setInterval(() => {
      callback(new Date().getTime() - start);
    }, interval);
    return () => {
      clearInterval(I);
    };
  }, []);
}

// useReducer 对象考虑

/**
 * 提供实现slider的底层
 * @param {*} N
 * @param {*} speed
 */
function useSlider(N, speed = 3000) {
  const [slider, setSlider] = useState(0);
  useInterval((diff) => {
    setSlider((_) => Math.floor(diff / speed) % N);
  }, 300);
  return slider;
}

function App() {
  const [searchText, setSearchText] = useState("");

  const filterProducts = () => {
    if (!searchText) {
      return getProductData();
    } else {
      return getProductData().filter((product) =>
        product.name.includes(searchText)
      );
    }
  };
  const products = filterProducts();

  const handleFilterChange = (e) => {
    setSearchText(e.target.value);
    // 当用户在搜索框中输入文本时，这个函数会被调用。它使用setSearchText来更新searchText状态，并打印一些调试信息。
    console.log(e);
  };

  const imgs = [];
  const slider = useSlider(imgs.length);

  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  return (
    <div>
      <div className="app-container">
        <Header></Header>
        <LeftSlider></LeftSlider>
        <AlternatingChart></AlternatingChart>
        <RightTopView></RightTopView>
        <CenterTopIcon></CenterTopIcon>
        <SecondView></SecondView>
        <ThirdView></ThirdView>
        {/* {products.map((product, index) => {
        return <Product product={product} key={index} />;
      })} */}
      </div>
    </div>
  );
}

export default App;
