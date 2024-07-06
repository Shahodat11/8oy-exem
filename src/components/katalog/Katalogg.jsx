import React from "react";
import "../katalog/katalog.css";
import { NavLink } from "react-router-dom";
import cart1 from "../../assets/250970 1.svg";
import cart2 from "../../assets/000000392_granda_led_ral9006_ceiling_0-45-125 1.svg";
import cart3 from "../../assets/15825 1.svg";
import cart4 from "../../assets/2_k97l-dp 1.svg";
import cart5 from "../../assets/649de3926f2a436cd230e74fb12d525c 1.svg";
import cart6 from "../../assets/0T-000095810020719040101 1.svg";

const Katalog = () => {
  return (
    <div className="container">
      <div>
        <div className="katalog">
          <h3 className="h3">Каталог</h3>
          <NavLink to={`/Catalog`}>
            <button className="button1">Весь каталог</button>
          </NavLink>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card_title">
              <h4 className="h4">Люстры</h4>
              <h5>От 540₽</h5>
            </div>
            <img className="cart_img" src={cart1} alt="" />
          </div>
          <div className="card">
            <div className="card_title">
              <h4 className="h4">Светильники</h4>
              <h5>От 540₽</h5>
            </div>
            <img className="cart_img" src={cart2} alt="" />
          </div>
          <div className="card">
            <div className="card_title">
              <h4 className="h4">Бра</h4>
              <h5>От 540₽</h5>
            </div>
            <img className="cart_img" src={cart3} alt="" />
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card_title">
              <h4 className="h4">Торшеры</h4>
              <h5>От 540₽</h5>
            </div>
            <img className="cart_img" src={cart4} alt="" />
          </div>
          <div className="card">
            <div className="card_title">
              <h4 className="h4">Настольные лампы</h4>
              <h5>От 540₽</h5>
            </div>
            <img className="cart_img" src={cart5} alt="" />
          </div>
          <div className="card">
            <div className="card_title">
              <h4 className="h4">Споты</h4>
              <h5>От 540₽</h5>
            </div>
            <img className="cart_img" src={cart6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Katalog;
