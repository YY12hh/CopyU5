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
        e.stopPropagation();
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
            backgroundColor: "#2D3748",
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

    return (
        <div style={styles.container}>
            <img className="download"
                style={{ ...styles.image, width: getEnlargedSize(0), height: getEnlargedSize(0) }}
                src={DownloadImg} alt="Download"
                onClick={handleImageClick(0)}
            />
            <div className="righttopView" style={styles.righttopView}>
                <div className="buttomCentent" style={styles.buttomCentent}>
                    <img
                        className="share"
                        src={shareImg}
                        alt="Share"
                        style={{ ...styles.image, width: getEnlargedSize(1), height: getEnlargedSize(1) }}
                        onClick={handleImageClick(1)}
                    />
                    <h3 style={styles.text}>Gerente</h3>
                    <img
                        className="share"
                        src={shareImg}
                        alt="Share"
                        style={{ ...styles.image, width: getEnlargedSize(2), height: getEnlargedSize(2) }}
                        onClick={handleImageClick(2)}
                    />
                    <h3 style={styles.text}>Serviço</h3>
                </div>
            </div>
        </div>
    );
};

export default RightTopView;