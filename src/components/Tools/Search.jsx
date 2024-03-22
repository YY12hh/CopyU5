// import { useRef, useEffect, useState, useReducer } from "react";

// const imgs = [];
// const slider = useSlider(imgs.length);
// const [searchText, setSearchText] = useState("");
// const products = filterProducts();

// const [form, setForm] = useState({
//     firstName: "Barbara",
//     lastName: "Hepworth",
//     email: "bhepworth@sculpture.com",
// });

// /**
//  * 提供基于时间间隔重复调用callback的hoos
//  * @param {*} callback
//  * @param {*} interval
//  */
// function useInterval(callback, interval) {
//     useEffect(() => {
//         const start = new Date().getTime();
//         const I = setInterval(() => {
//             callback(new Date().getTime() - start);
//         }, interval);
//         return () => {
//             clearInterval(I);
//         };
//     }, []);
// }

// // useReducer 对象考虑

// /**
//  * 提供实现slider的底层
//  * @param {*} N
//  * @param {*} speed
//  */
// function useSlider(N, speed = 3000) {
//     const [slider, setSlider] = useState(0);
//     useInterval((diff) => {
//         setSlider((_) => Math.floor(diff / speed) % N);
//     }, 300);
//     return slider;
// }



// const filterProducts = () => {
//     if (!searchText) {
//         return getProductData();
//     } else {
//         return getProductData().filter((product) =>
//             product.name.includes(searchText)
//         );
//     }
// };

// const handleFilterChange = (e) => {
//     setSearchText(e.target.value);
//     // 当用户在搜索框中输入文本时，这个函数会被调用。它使用setSearchText来更新searchText状态，并打印一些调试信息。
//     console.log(e);
// };


// const Search = () => {
//     return <div>    {


//     }</div>
// }
// export default Search;