import { useState } from "react";

const RightTopView = () => {
  const [isEnlarged, setIsEnlarged] = useState([false, false, false]);
  const handleImageClick = (index) => (e) => {
    const newIsEnlarged = [...isEnlarged];
    newIsEnlarged[index] = !isEnlarged[index];
    setIsEnlarged(newIsEnlarged);

    setTimeout(() => {
      const react = isEnlarged.map(() => false);
      setIsEnlarged(react);
    }, 300);
    e.stoProgation();
  };

  const getEnlargedSize = (index) => {
    if (isEnlarged[index]) {
      return 100;
    } else {
      return 50;
    }
  };
};
const styles = {
  container: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    left: 0,
  },
  image: {
    width: (index) => getEnlargedSize(index),
    height: (index) => getEnlargedSize(index),
  },
};

return <div style={styles.container}></div>;

export default RightTopView;
