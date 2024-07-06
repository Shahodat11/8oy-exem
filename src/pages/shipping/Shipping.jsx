import React, { useEffect } from "react";
import "../shipping/shipping.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Shippings from "../../components/shipping/Shippings";
import Footer from "../../components/footer/Footer";

const Shipping = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <Shippings />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0454764640376!2d69.20105526436846!3d41.28611471209284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1720203989755!5m2!1sru!2s"
          height="450"
          className="google"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Shipping;
