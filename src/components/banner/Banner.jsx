import React from "react";
import "../banner/banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/Group 13 (1).svg";

import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <Swiper
          // loop={true}
          // navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="banner__swiper"
        >
          <SwiperSlide className="banner__item">
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="banner__item">
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="banner__item">
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="banner__item">
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="banner__item">
            <img src={img1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
