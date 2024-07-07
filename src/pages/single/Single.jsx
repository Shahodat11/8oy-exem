import React, { useEffect } from "react";
import "../single/single.scss";
import { NavLink, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import img from "../../assets/20230528180416535300 1 (1).svg";
import single from "../../assets/Frame 395.svg";

const Single = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  console.log(data);
  return (
    <section className="single">
      <Navbar />
      <Header />
      <div className="container">
        <div className="singleTop">
          <NavLink to={`/`}>
            <button className="button11">Главная</button>
          </NavLink>
        </div>
      </div>
      <div className="container">
        <div className="single-nav">
          <div className="nav-links1">
            <img className="single-img" src={img} width={50} alt="" />
            <div className="navs">
              <img className="single-min" src={img} width={50} alt="" />
              <img className="single-min" src={img} width={50} alt="" />
              <img className="single-min" src={img} width={50} alt="" />
              <img className="single-min" src={img} width={50} alt="" />
            </div>
          </div>
          <div className="nav-links2">
            <h5 className="single-title">{data?.title}</h5>
            <img className="singlee" src={single} alt="" />
            <div className="price">
              <h5 className="new-price">{data?.price}₽</h5>
              <h5 className="old-price">
                <del>7 000₽</del>
              </h5>
            </div>
            <p className="single-p">
              Профессиональный гоночный хардтейл для кросс-кантри уровня
              Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных
              хардтейлов для кросс-кантри.
            </p>
            <div className="single-button">
              <NavLink to={`/cart`}>
                <button className="button12">В корзину</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="single-nav1">
          <h1 className="single-h1">Характеристика</h1>
          <div className="tablet">
            <div className="tablet-title">
              <h1 className="title1">Цвет</h1>
              <h1 className="title2">Жёлтый</h1>
            </div>
            <div className="tablet-title">
              <h1 className="title1">Год</h1>
              <h1 className="title2">2016</h1>
            </div>
            <div className="tablet-title">
              <h1 className="title1">Диаметр колеса</h1>
              <h1 className="title2">27.5</h1>
            </div>
            <div className="tablet-title">
              <h1 className="title1">Материал рамы</h1>
              <h1 className="title2">Карбон</h1>
            </div>
            <div className="tablet-title">
              <h1 className="title1">Размер</h1>
              <h1 className="title2">L</h1>
            </div>
            <div className="tablet-title">
              <h1 className="title1">Страна</h1>
              <h1 className="title2">Швейцария</h1>
            </div>
            <div className="tablet-title">
              <h1 className="title1">Производитель</h1>
              <h1 className="title2">Scott</h1>
            </div>
            <div className="tablet-title1">
              <h1 className="title1">Покрышки</h1>
              <h1 className="title2">
                Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy
              </h1>
            </div>
            <div className="tablet-title1">
              <h1 className="title1">Рама</h1>
              <h1 className="title2">
                Scale Carbon / HMX-технология / технология IMP
              </h1>
            </div>
            <div className="tablet-title1">
              <h1 className="title1">Подседельный Штырь</h1>
              <h1 className="title2">
                Ritchey WCS 700 Series: Carbon Link FlexLogic
              </h1>
            </div>
            <div className="tablet-title1">
              <h6 className="title1">Седло</h6>
              <h6 className="title2">Ritchey WCS Streem V3 Titanium rails</h6>
            </div>
            <div className="tablet-title1">
              <h1 className="title1">Вилка</h1>
              <h1 className="title2">
                Rock Shox SID RL3 Air / демпфер DNA3 3-режима
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Single;
