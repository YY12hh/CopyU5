import React, { useState } from 'react';
import left_icon_0 from "../asset/CenterTopIcon/0.png";
import left_icon_1 from "../asset/CenterTopIcon/1.png";
import left_icon_2 from "../asset/CenterTopIcon/2.png";
import left_icon_3 from "../asset/CenterTopIcon/3.png";
import left_icon_4 from "../asset/CenterTopIcon/4.png";
import left_icon_5 from "../asset/CenterTopIcon/5.png";
import left_icon_6 from "../asset/CenterTopIcon/6.png";
import search from "../asset/CenterTopIcon/7.png";
import { IconBarComp } from "./Tools/comment";

const centerTopIconItem = [
    { src: left_icon_0, title: "All(2024)" },
    { src: left_icon_1, title: "Slots" },
    { src: left_icon_2, title: "Fishing" },
    { src: left_icon_3, title: "Vivo" },
    { src: left_icon_4, title: "Viver" },
    { src: left_icon_5, title: "Favoritos" },
    { src: left_icon_6, title: "Recente" },
];

const CenterTopIcon = () => {
    const [selectedIconIndex, setSelectedIconIndex] = useState(null);

    const handleIconClick = (index) => {
        setSelectedIconIndex(index === selectedIconIndex ? null : index);
    };

    return (
        <IconBarComp
            centerTopIconItem={centerTopIconItem}
            selectedIconIndex={selectedIconIndex}
            handleIconClick={handleIconClick}
            search={search}
        />
    );
};

export default CenterTopIcon;




