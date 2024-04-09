import React from "react";
import Box from "./Box";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ServicesSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">'  + "</span>";
    },
  };

  return (
    <Swiper
      pagination={pagination}
      slidesPerView={3}
      spaceBetween={30}
      modules={[Pagination]}
      className="z-20"
    >
      <SwiperSlide><Box/></SwiperSlide>
      <SwiperSlide><Box/></SwiperSlide>
      <SwiperSlide><Box/></SwiperSlide>
      <SwiperSlide><Box/></SwiperSlide>
      <SwiperSlide><Box/></SwiperSlide>
      <SwiperSlide><Box/></SwiperSlide>

    </Swiper>
  );
};

export default ServicesSlider;
