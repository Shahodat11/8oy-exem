import React from "react";
import "../banner/banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import img1 from "../../assets/Group 66.svg";
import img2 from "../../assets/Group 183.svg";
import img3 from "../../assets/Group 68.svg";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <h2 className="product_h2">Только проверенные бренды</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
