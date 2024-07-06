import React, { useEffect } from "react";
import "../blogpage/blog.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import BlogComponents from "../../components/blogcomponents/BlogComponents";
import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Blogpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <div className="blogs">
          <NavLink to={`/`}>
            <button className="button11">Главная</button>
          </NavLink>
          <h2 className="kompone-h2">Блог</h2>
        </div>
        <div className="blogcomponents">
          <BlogComponents />
        </div>
        <div className="blogcomponents">
          <BlogComponents />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogpage;
