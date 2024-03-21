const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
      /**
       * getCLS: 累计布局偏移（Cumulative Layout Shift），衡量页面内容的视觉稳定性。
          getFID: 第一次输入延迟（First Input Delay），衡量页面对用户交互的响应速度。
            getFCP: 首次内容绘制（First Contentful Paint），衡量页面首次渲染内容的时间。
              getLCP: 最大内容绘制（Largest Contentful Paint），衡量页面主要内容的加载时间。
                getTTFB: 时间至首字节（Time To First Byte），衡量服务器响应请求并返回第一个字节的时间。
       */
    });
  }
};

export default reportWebVitals;
