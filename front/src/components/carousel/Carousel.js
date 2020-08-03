import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import { getSheetsApi } from "../../services"

import "./slide.scss";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const unit = slides.length

  useEffect(
    () => {
      getSlides()
    },[])


  const [x, setX] = useState(0);
  const goLeft = () => {
    if (x === 0) {
      setX(-200);
    } else {
      setX(x + 100);
    }
  };
  const goRight = () => {
    if (x === -(unit*100)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };

  const getSlides = async () => {
    const slides = await getSheetsApi();
    console.log(slides);
    setSlides(slides);
  };

  setTimeout(goRight, 5000);
  return (
    <div
      className=" flex items-center justify-center border-b-5 border-gray-500 relative "
      style={{
        height: "100vh",
        width: `${unit}00vw`,
      }}>
      {slides.map((item) => (
        <div
          className="slide"
          style={{ transform: `translateX(${x}%)` }}
          key={item.id}>
          <Slide item={item} />
        </div>
      ))}
      <button id="goLeft" onClick={goLeft}></button>
      <button id="goRight" onClick={goRight}></button>
    </div>
  );
};

export default Carousel;
