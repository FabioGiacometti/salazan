import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import { getSheetsApi } from "../../services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import "./slide.scss";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const unit = slides.length;

  useEffect(() => {
    getSlides();
  }, []);

  const getSlides = async () => {
    const slides = await getSheetsApi();
    setSlides(slides);
  };
  const eslides = slides.map((item) => (
    <SwiperSlide>
      <div className="slide" key={item.titulo}>
        <Slide item={item} key={item.titulo} />
      </div>
    </SwiperSlide>
  ));
  return (
    <div
      className=" flex items-center justify-center border-b-5 border-gray-500 relative "
      style={{
        height: "100vh",
        width: `${unit}00vw`,
      }}>
      <Swiper>{eslides}</Swiper>
    </div>
  );
};

export default Carousel;
