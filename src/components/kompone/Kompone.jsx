import React from "react";
import "../kompone/kompone.scss";
import { NavLink } from "react-router-dom";

const Kompone = () => {
  return (
    <div className="container">
      <div className="kompone">
        <div className="navlink1">
          <NavLink to={`/`}>
            <button className="button11">Главная</button>
          </NavLink>
          <h2 className="kompone-h2">О компании</h2>
          <div className="kompone-carts">
            <div className="kompone-cart">
              <h4 className="kompone-h4">170+ </h4>
              <h5 className="kompone-h5">Товаров</h5>
            </div>
            <div className="kompone-cart">
              <h4 className="kompone-h4">1000+ </h4>
              <h5 className="kompone-h5">Довольных покупателей</h5>
            </div>
            <div className="kompone-cart">
              <h4 className="kompone-h4">170+ </h4>
              <h5 className="kompone-h5">Товаров</h5>
            </div>
          </div>
        </div>
        <div className="nav-link2">
          <p className="kompone-p">
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют
          </p>
          <p className="kompone-p">
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
          <p className="kompone-p">
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют
          </p>
          <p className="kompone-pp">
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kompone;
