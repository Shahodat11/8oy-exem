import React from "react";
import "../empty/Empty.scss";
import cart from "../../assets/cart.png";
import { NavLink } from "react-router-dom";

const Emptyy = ({ text }) => {
  return (
    <div className="empty">
      <img src={cart} alt="" />
      <h2 className="empty-h2">We didn't find what you were looking for :(</h2>
      <NavLink to={`/`}>
        <button className="button12">На главную</button>
      </NavLink>
    </div>
  );
};

export default Emptyy;
