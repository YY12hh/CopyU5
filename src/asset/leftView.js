import { useRef, useEffect, useState, useReducer } from "react";

const [isMinimized, setIsMinimized] = useState(false); // 控制是否最小化 

// 点击事件处理函数  
const handleBtn_left = () => {  
  setIsMinimized(!isMinimized); // 切换状态  
};  