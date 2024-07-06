import React from "react";
import "../empty/Empty.css";
import wishlist from "../../assets/wishlist.png";
import { NavLink } from "react-router-dom";

const Empty = ({ text }) => {
  return (
    <div className="empty">
      <img src={wishlist} alt="" />
      <h2 className="empty-h2">We didn't find what you were looking for :(</h2>
      <NavLink to={`/`}>
        <button className="button12">На главную</button>
      </NavLink>
    </div>
  );
};

export default Empty;
