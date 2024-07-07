import React from "react";
import "../notFound/notFound.scss";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <div className="notFound">
          <h6 className="not404">404</h6>
          <h5 className="not">Похоже, ничего не нашлось :(</h5>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
