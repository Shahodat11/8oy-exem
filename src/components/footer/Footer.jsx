import React from "react";
import "../footer/footer.css";
import footerLogo from "../../assets/Group 64.svg";
import cardLogo from "../../assets/image 1.svg";
import logo from "../../assets/Group 59.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footers">
      <div className="container">
        <div className="footer">
          <div className="footer_title">
            <img src={footerLogo} alt="" />
            <h4 className="tel">8 (800) 890-46-56</h4>
            <img src={cardLogo} alt="" />
            <h4 className="footer_h4">Политика конфидециальности</h4>
            <h4 className="footer_h4">Пользовательское соглашение</h4>
            <div className="logo">
              <img className="logo" src={logo} alt="" />
              <img className="logo" src={logo} alt="" />
              <img className="logo" src={logo} alt="" />
            </div>
          </div>
          <div className="footer_title">
            <h6 className="footer_h6">Покупателям</h6>
            <h4 className="footer_h4">
              <NavLink to="/" className="footer_h4">
                О компании
              </NavLink>
            </h4>
            <h4 className="footer_h4">
              <NavLink to="/" className="footer_h4">
                Доставка и оплата
              </NavLink>
            </h4>
            <h4 className="footer_h4">
              <NavLink to="/" className="footer_h4">
                Возврат
              </NavLink>
            </h4>
            <h4 className="footer_h4">
              <NavLink to="/" className="footer_h4">
                Гарантии
              </NavLink>
            </h4>
            <h4 className="footer_h4">
              <NavLink to="/" className="footer_h4">
                Контакты
              </NavLink>
            </h4>
            <h4 className="footer_h4">
              <NavLink to="/" className="footer_4">
                Блог
              </NavLink>
            </h4>
          </div>
          <div className="footer_title">
            <h6 className="footer_h6">Товары</h6>
            <h4 className="footer_h4">Люстры</h4>
            <h4 className="footer_h4">Светильники</h4>
            <h4 className="footer_h4">Бра</h4>
            <h4 className="footer_h4">Торшеры</h4>
            <h4 className="footer_h4">Комплектуюшие</h4>
            <h4 className="footer_h4">Настольные лампы</h4>
          </div>
          <div className="footer_title">
            <h4 className="footer_h4">Споты</h4>
            <h4 className="footer_h4">Трековые светильники</h4>
            <h4 className="footer_h4">Уличные светильники</h4>
            <h4 className="footer_h4">Технические светильники</h4>
            <h4 className="footer_h4">Светодиодные ленты</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
