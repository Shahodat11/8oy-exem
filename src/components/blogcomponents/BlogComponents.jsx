import React from "react";
import blog_img1 from "../../assets/Rectangle 12.svg";
import blog_img2 from "../../assets/Rectangle 12 (1).svg";
import blog_img3 from "../../assets/Rectangle 12 (2).svg";
import strelka from "../../assets/Vector 4.svg";

const BlogComponents = () => {
  return (
    <div>
      <div className="blog">
        <div className="blog_cart">
          <img src={blog_img1} alt="" />
          <div className="blog_title">
            <h3 className="blog_h6">Как правильно освещать дом снаружи?</h3>
            <img className="strelka" src={strelka} alt="" />
          </div>
          <h3 className="day">01.01.2024</h3>
        </div>
        <div className="blog_cart">
          <img src={blog_img2} alt="" />
          <div className="blog_title">
            <h3 className="blog_h6">Как правильно освещать дом снаружи?</h3>
            <img className="strelka" src={strelka} alt="" />
          </div>
          <h3 className="day">01.01.2024</h3>
        </div>
        <div className="blog_cart">
          <img src={blog_img3} alt="" />
          <div className="blog_title">
            <h3 className="blog_h6">Как правильно освещать дом снаружи?</h3>
            <img className="strelka" src={strelka} alt="" />
          </div>
          <h3 className="day">01.01.2024</h3>
        </div>
      </div>
    </div>
  );
};

export default BlogComponents;
