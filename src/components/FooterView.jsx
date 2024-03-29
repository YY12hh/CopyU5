import React from 'react';
import Bg_1 from "../asset/ButtomIcon/icon-1.png";
import Bg_2 from "../asset/ButtomIcon/icon-2.png";
import Bg_3 from "../asset/ButtomIcon/icon-3.png";
import Bg_4 from "../asset/ButtomIcon/icon-4.png";
import Bg_5 from "../asset/ButtomIcon/icon-5.png";
import Bg_6 from "../asset/ButtomIcon/icon-6.png";
import Bg_7 from "../asset/ButtomIcon/icon-7.png";
import Bg_8 from "../asset/ButtomIcon/icon-8.png";
import Bg_9 from "../asset/ButtomIcon/icon-9.png";
import Bg_10 from "../asset/ButtomIcon/icon-10.png";
import Bg_11 from "../asset/ButtomIcon/icon-11.png";
import Bg_12 from "../asset/ButtomIcon/icon-12.png";
import Bg_13 from "../asset/ButtomIcon/icon-13.png";
import Bg_14 from "../asset/ButtomIcon/icon-14.png";
import './css/footer.css';

const list1 = ['Jogo', 'Salão', 'Slots', 'Fishing', 'Vivo', 'Viver']
const list2 = ['Ajuda', 'Política de Privacidade', 'Termos de Serviço', 'Descrição do nível VIP']
const list3 = ['Suporte', 'Suporte online', 'Central de Ajuda']
const Productdomain = "TT Group"
const companyButtom = `@ 2024 ${Productdomain} All rights.`

const imgLine = '---------------------------------------------'

// Footer组件  
const Footer = () => (
    <div className="footer">
        <p className="footer-text">{companyButtom}</p>
    </div>
);

// Lists组件  
const Lists = () => (
    <div className="lists-container">
        <div className="list-item">
            <h3 className="list-title">{list1[0]}</h3>
            <p className="img-line">{imgLine}</p>
            <ul className="list">
                {list1.slice(1).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        {/* 重复上面的div.list-item结构为list2和list3 */}
        <div className="list-item">
            <h3 className="list-title">{list2[0]}</h3>
            <p className="img-line">{imgLine}</p>
            <ul className="list">
                {list2.slice(1).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div className="list-item">
            <h3 className="list-title">{list3[0]}</h3>
            <p className="img-line">{imgLine}</p>
            <ul className="list">
                {list3.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div className="icons-container">
            {/* 渲染图片Bg_1到Bg_14 */}
            {[Bg_1, Bg_2, Bg_3, Bg_4, Bg_5,
                Bg_6, Bg_7, Bg_8, Bg_9, Bg_10,
                Bg_11, Bg_12, Bg_13, Bg_14].map((icon, index) => (
                    <img key={index} src={icon} alt="" className="icon" />
                ))}
        </div>
    </div>
);

// FooterView组件  
const FooterView = () => (
    <div className="app-layout">
        <Lists />
        <Footer />
    </div>
);

export default FooterView;