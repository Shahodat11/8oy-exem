import React from "react";
import "../header/header.css";
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
        <img className="" src={logo} alt="" />
        <NavLink>
          <button className="button">Каталог</button>
        </NavLink>
        <Product />
        <IoSearch className="search-icon" />
        <div className="item_div">
          <NavLink className="navbar__item">
            <FaRegHeart className="navbar__item" />
          </NavLink>
          <span>Избранное</span>
        </div>
        <div className="item_div">
          <NavLink className="navbar__item">
            <BiBarChartAlt className="navbar__item" />
          </NavLink>
          <span>Сравнение</span>
        </div>
        <div className="item_div">
          <NavLink className="navbar__item">
            <GrCart className="navbar__item" />
          </NavLink>
          <span>Корзина</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
