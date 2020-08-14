import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import { getSheetsApi } from "../../services";
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import "./slide.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar,]);



const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const unit = slides.length;

  useEffect(() => {
    getSlides();
  }, []);

  const getSlides = async () => {
    const slides = await getSheetsApi();
    console.log(slides);
    setSlides(slides);
  };

  return (
    <div
      className=" flex items-center justify-center border-b-5 border-gray-500 relative "
      style={{
        height: "100vh",
        // width: `${unit}00vw`,
      }}
    >
      <Swiper
      
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {slides.map((item) => (
          <SwiperSlide>
            <div className="slide" key={item.id}>
              <Slide item={item} />
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default Carousel;
