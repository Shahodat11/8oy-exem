import React from "react";
import "../shipping/shipping.scss";
import { NavLink } from "react-router-dom";

const Shippings = () => {
  return (
    <div className="container">
      <div className="shipping">
        <div className="navlink1">
          <NavLink to={`/`}>
            <button className="button11">Главная</button>
          </NavLink>
          <h2 className="shipping-h2">Доставка и оплата</h2>
        </div>
        <div className="nav-link3">
          <h6 className="shipping-h6">Доставка</h6>
          <p className="shipping-p">
            Мы осуществляем доставку со склада по Москве и Московской области
            собственной курьерской службой. Транспортными компаниями нашу
            продукцию мы доставляем по всей территории РФ, а так же по всем
            странам СНГ. Сроки доставки: 4—6 недель
          </p>
          <h6 className="shipping-h6">Курьерская доставка</h6>
          <p className="shipping-p">
            БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы
            свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД
          </p>
          <h6 className="shipping-h6">Самовывоз</h6>
          <p className="shipping-p">
            Любой заказ можно забрать самостоятельно по адресу: г.
            Москва, Дмитровское шоссе д.100с2
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shippings;
