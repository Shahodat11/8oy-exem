import React from "react";
import logo from "../../assets/Group 64.svg";
import { FaRegHeart } from "react-icons/fa6";
import { BiBarChartAlt } from "react-icons/bi";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="" />
        <form action="">
          <input type="text" />
        </form>
        <NavLink className="navbar__item">
          <FaRegHeart />
        </NavLink>
        <NavLink className="navbar__item">
          <BiBarChartAlt />
        </NavLink>
        <NavLink className="navbar__item">
          <GrCart />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
