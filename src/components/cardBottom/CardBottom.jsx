import React from "react";
import "../cardBottom/cartBottom.scss";
import { NavLink } from "react-router-dom";
import cart1 from "../../assets/Group 123.svg";
import cart2 from "../../assets/img2.png";
import cart3 from "../../assets/img3.png";
import cart4 from "../../assets/Group 126.svg";

const Katalog = () => {
  return (
    <>
      <div className="container">
        <div>
          <div className="katalogg">
            <h3 className="h33">Почему NORNLIGHT?</h3>
            <NavLink to={`/aboutUs`}>
              <button className="button1">О компании</button>
            </NavLink>
          </div>
          <div className="cards">
            <div className="cardd">
              <img className="cart_imgg" src={cart1} alt="" />
              <div className="card_title">
                <h4 className="card_h4">Только проверенные бренды</h4>
                <h5 className="">Бренды, проверенные временем и качеством</h5>
              </div>
            </div>
            <div className="cardd">
              <img className="cart_imgg" src={cart2} alt="" />
              <div className="card_title">
                <h4 className="card_h44">Самые низкие цены</h4>
                <h5 className="">Ниже не будет нигде</h5>
              </div>
            </div>
            <div className="cardd">
              <img className="cart_imgg" src={cart3} alt="" />
              <div className="card_title">
                <h4 className="card_h4">Быстрая доствка</h4>
                <h5 className="">Доставляем по всей РФ за 1-10 дней</h5>
              </div>
            </div>
            <div className="cardd">
              <img className="cart_imgg" src={cart4} alt="" />
              <div className="card_title">
                <h4 className="card_h44">Большой ассортимент</h4>
                <h5 className="">Более 1000 товаров</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Katalog;
