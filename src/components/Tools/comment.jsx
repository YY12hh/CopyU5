const ImageScroll = ({ images }) => (
    <div className="image-scroll-wrapper">
        {images.map((image, index) => (
            <img key={index} src={image.src} alt="" className="scroll-image" />
        ))}
    </div>
);

export default ImageScroll;


export const IconBarComp = ({ centerTopIconItem, selectedIconIndex, handleIconClick, search }) => (
    <div className="icon-bar-container">
        {centerTopIconItem.map((item, index) => (
            <div
                key={index}
                className={`icon-item ${index === 0 ? 'first-icon' : ''} ${selectedIconIndex === index ? 'selected' : ''}`}
                onClick={() => handleIconClick(index)}
            >
                <img
                    src={item.src}
                    alt={item.title}
                    className={`icon-image ${selectedIconIndex === index ? 'orange-filter' : ''}`}
                />
                <span className="icon-title">{item.title}</span>
            </div>
        ))}
        <div className="last-icon-container">
            <div className="icon-item">
                <img src={search.src} alt={search.title} className="icon-image" />
                <span className="icon-title">{search.title}</span>
            </div>
        </div>
    </div>
);


// 改装成LeftSlider的显示隐藏节点
export const LeftSidePanel = ({ isMinimized, imgSrc, btnSrc, btnAlt, btnOnClick, className, children }) => {
    return (
        <div className={`fixed-element ${className}`}>
            <img src={imgSrc} />
            <img
                className={isMinimized ? 'btn_right' : 'btn_left'}
                src={btnSrc}
                onClick={btnOnClick}
                alt={btnAlt}
            />
            {children}
        </div>
    );
};
