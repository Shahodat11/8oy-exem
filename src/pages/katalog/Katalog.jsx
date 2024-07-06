import React, { useEffect } from "react";
import "../katalog/katalog.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Katalogg from "../../components/katalog/Katalogg";
import Banner from "../../components/swiper/Banner";
import Blog from "../../components/blog/Blog";
import BlogBottom from "../../components/blogBottom/BlogBottom";
import Footer from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";

const Katalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <NavLink to={`/`}>
          <button className="button11">Главная</button>
        </NavLink>
      </div>
      <div className="katalogs">
        <Katalogg />
      </div>
      <Banner />
      <Blog />
      <BlogBottom />
      <Footer />
    </div>
  );
};

export default Katalog;
