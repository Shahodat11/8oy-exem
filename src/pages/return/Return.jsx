import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Returnn from "../../components/return/Returnn";

const Return = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <Returnn />
      <Footer />
    </div>
  );
};

export default Return;
