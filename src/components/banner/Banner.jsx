import React from "react";
import "../banner/banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/bannerImg.png";

import { Navigation, Autoplay, Pagination } from "swiper/modules";

const cBanner = () => {
  return (
    <div className="container">
      <div className="banner">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="rasmcha">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rasmcha">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rasmcha">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img1} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default cBanner;
