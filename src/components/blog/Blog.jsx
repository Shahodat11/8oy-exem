import React from "react";
import "../blog/blog.scss";
import { NavLink } from "react-router-dom";
import blog_img1 from "../../assets/Rectangle 12.svg";
import blog_img2 from "../../assets/Rectangle 12 (1).svg";
import blog_img3 from "../../assets/Rectangle 12 (2).svg";
import strelka from "../../assets/Vector 4.svg";

const Blog = () => {
  return (
    <>
      <div className="container">
        <div className="product_top">
          <h2 className="product_h2">Блог</h2>
          <NavLink to={`/blog`}>
            <button className="button1">Перейти в блог</button>
          </NavLink>
        </div>
        <div className="blog">
          <div className="blog_cart">
            <img className="blogcart-img" src={blog_img1} alt="" />
            <div className="blog_title">
              <h3 className="blog_h6">Как правильно освещать дом снаружи?</h3>
              <img className="strelka" src={strelka} alt="" />
            </div>
            <h3 className="day">01.01.2024</h3>
          </div>
          <div className="blog_cart">
            <img className="blogcart-img" src={blog_img2} alt="" />
            <div className="blog_title">
              <h3 className="blog_h6">Как правильно освещать дом снаружи?</h3>
              <img className="strelka" src={strelka} alt="" />
            </div>
            <h3 className="day">01.01.2024</h3>
          </div>
          <div className="blog_cart">
            <img className="blogcart-img" src={blog_img3} alt="" />
            <div className="blog_title">
              <h3 className="blog_h6">Как правильно освещать дом снаружи?</h3>
              <img className="strelka" src={strelka} alt="" />
            </div>
            <h3 className="day">01.01.2024</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
