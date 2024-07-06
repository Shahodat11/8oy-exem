import React from "react";
import "../header/header.scss";
import logo from "../../assets/Group 64.svg";
import { FaRegHeart } from "react-icons/fa6";
import { BiBarChartAlt } from "react-icons/bi";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import Product from "../../pages/product/Product";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div>
          <NavLink to={`/`}>
            <img className="logo" src={logo} alt="" />
          </NavLink>
          <NavLink to={`/Catalog`}>
            <button className="button">Каталог</button>
          </NavLink>
        </div>
        <Product />
        <IoSearch className="search-icon" />
        <div className="icons">
          <div className="item_div">
            <NavLink to={`/wishlist`} className="navbar__item">
              <FaRegHeart className="navbar__item" />
            </NavLink>
            <h6>Избранное</h6>
          </div>
          <div className="item_div">
            <NavLink to={`/notFound`} className="navbar__item">
              <BiBarChartAlt className="navbar__item" />
            </NavLink>
            <h6>Сравнение</h6>
          </div>
          <div className="item_div">
            <NavLink to={`/cart`} className="navbar__item">
              <GrCart className="navbar__item" />
            </NavLink>
            <h6>Корзина</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
