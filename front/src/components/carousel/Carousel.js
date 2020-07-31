import React, { useState } from "react";
import slides from "../../assets/slides";
import Slide from "./Slide";
import "./slide.scss";

const Carousel = () => {

    const [x, setX] = useState(0);
    const goLeft = () => {
        if (x === 0) {
            setX(-200);
        } else {
            setX(x + 100);
        }
    };
    const goRight = () => {
        if (x === -200) {
            setX(0);
        } else {
            setX(x -100);
        }
    };
    
    setTimeout(goRight, 5000)
  return (
    <div
      className=" flex items-center justify-center border-b-5 border-gray-500 relative "
      style={{
        height: "100vh",
        width: "300vw",
      }}>
      {slides.map((item) => (
        <div className="slide" style={{ transform: `translateX(${x}%)` }}>
          <Slide item={item} key={item.id} />
        </div>
      ))}
      <button id="goLeft" onClick={goLeft}>
        
      </button>
      <button id="goRight" onClick={goRight}>
        
      </button>
    </div>
  );
};

export default Carousel;
