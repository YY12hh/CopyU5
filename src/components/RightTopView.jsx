import React, { useState } from "react";
import DownloadImg from "../asset/rightTop/download.png";
import shareImg from "../asset/rightTop/share.png";

const RightTopView = () => {
    const [isEnlarged, setIsEnlarged] = useState([false, false, false]);
    const handleImageClick = (index) => (e) => {
        const newEnlarged = [...isEnlarged];
        newEnlarged[index] = !newEnlarged[index];
        setIsEnlarged(newEnlarged);
        setTimeout(() => {
            const resetEnlarged = isEnlarged.map(() => false);
            setIsEnlarged(resetEnlarged);
        }, 300);
    };

    const getEnlargedSize = (index) => isEnlarged[index] ? 52 : 42;
    // const getImageStyle = (index) => ({
    //     ...styles.image,
    //     width: getEnlargedSize(index),
    //     height: getEnlargedSize(index),
    //     filter: isEnlarged[index] ? 'sepia(1) hue-rotate(30deg) saturate(3)' : 'none',
    // });

    const styles = {

        container: {
            position: "fixed",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 80,
            height: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        righttopView: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2D3748",
            borderRadius: 35,
        },
        buttomCentent: {
            width: 80,
            height: 164,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 10px",
            borderRadius: 35,
            backgroundColor: "#2D3748", // stylesCompents
        },
        image: {
            cursor: "pointer",
            padding: 4,
            transition: "width 0.5s ease, height 0.5s ease",
            width: (index) => getEnlargedSize(index),
            height: (index) => getEnlargedSize(index),
        },
        text: {
            color: "white",
            fontSize: 12,
            textAlign: "center",
        },
    };


    // 提取出的 ShareIcon 组件  
    const ShareIcon = ({ index, handleImageClick }) => (
        <img
            className="share"
            src={shareImg}
            alt="Share"
            style={{ ...styles.image, width: getEnlargedSize(index), height: getEnlargedSize(index) }}
            onClick={() => handleImageClick(index)}
        />
    );

    return (
        <div style={styles.container}>
            <ShareIcon index={0} handleImageClick={handleImageClick(0)} />
            <div className="righttopView" style={styles.righttopView}>
                <div className="buttomCentent" style={styles.buttomCentent}>
                    <ShareIcon index={1} handleImageClick={handleImageClick(1)} />
                    <h3 style={styles.text}>Gerente</h3>
                    <ShareIcon index={2} handleImageClick={handleImageClick(2)} />
                    <h3 style={styles.text}>Serviço</h3>
                </div>
            </div>
        </div>
    );
};

export default RightTopView;