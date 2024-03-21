import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  /**
   * 这样做的目的是确保当React渲染<App />及其所有子组件时，任何潜在的问题都会在控制台中以警告的形式显示出来。
      它本身并没有因为被包裹在<React.StrictMode>中而改变其渲染逻辑或结果。但是，任何在<App />或其子组件中可能存在的潜在问题都会被React识别并警告。
      例如，假设在<App />组件中有一个使用了componentWillMount生命周期方法的子组件。由于componentWillMount是一个即将被废弃的方法，当这个组件被<React.StrictMode>包裹时，
      React会在控制台中显示一个警告，提示你更新代码以避免使用这个方法。
      总之，<React.StrictMode>是一个有用的工具，用于在开发阶段捕获React应用程序中可能存在的问题，并帮助你写出更好的代码。
      注意，它并不应该用于生产环境，因为它不会提供任何实际的运行时功能，只是用于开发和调试。
   */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
