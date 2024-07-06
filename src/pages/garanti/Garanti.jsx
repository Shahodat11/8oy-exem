import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Garant from "../../components/garant/Garant";

const Garanti = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <Garant />
      <Footer />
    </div>
  );
};

export default Garanti;
