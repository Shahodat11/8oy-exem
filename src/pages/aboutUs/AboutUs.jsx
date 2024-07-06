import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Blog from "../../components/blog/Blog";
import Banner from "../../components/swiper/Banner";
import Kompone from "../../components/kompone/Kompone";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Kompone />
      <Banner />
      <Blog />
      <Footer />
    </div>
  );
};

export default AboutUs;
