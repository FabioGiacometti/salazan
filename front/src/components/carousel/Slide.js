import React, {useState, useEffect} from "react";

const Slide = (props) => {

  const { imagen, esAuto, titulo, descripcion, precio } = props
  console.log("estos son props",props)

  return (
    <div
      className="slider h-screen w-screen overflow-hidden flex flex-col items-center bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `${imagen}` }}>
      <div
        className="w-full sm:w-auto relative h-full m-0 md:my-20 md:mx-12 self-start flex flex-col justify-center sm:justify-evenly pb-32 sm:pb-16 sm:p-16 items-center"
        style={{ backgroundColor: "#00000050" }}>
        <p
          className="font-black text-white text-6xl"
          style={{ textShadow: "0 2px 2px gray" }}>
          {titulo}
        </p>
        <p className="font-light text-4xl text-white">{descripcion}</p>
        <hr />
        <p className="font-black text-5xl text-white py-2 px-4 border-2 border-yellow-300 ">
          {precio}
        </p>
        <h4 className="text-white">Entrega y cuotas</h4>
        <br />
        <div className="w-56 ">
          <span className="block hover:bg-white border-4 w-full text-center text-gray-100 hover:text-gray-900 py-2 px-6 rounded transition-all duration-500 ease-in-out">
            Ver Mas
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
