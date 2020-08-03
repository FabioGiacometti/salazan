import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCardById } from "../services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const Details = () => {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const [images, setImages] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    servicesGetCardById(id);
  }, []);



  const servicesGetCardById = async (id) => {
    const cardex = await getCardById(id);
    setLabels(cardex.data.detalleKey);
    setValues(cardex.data.detalleValue);
    setImages(cardex.data.pictures);
  };

  let fotos = images.map((imagenes) => (
    <SwiperSlide>
      <div
        className="h-full w-auto bg-red-700"
        style={{
          backgroundImage: `url("http://salazanautomotores.com.ar/${imagenes}")`,
          backgroundSize: "cover",
        }}></div>
    </SwiperSlide>
  ));

  let campos = labels.map((texto) => (
    <p className="text-yellow-500">{texto}</p>
  ));
  
  let descripcion = values.map((texto) =>
    texto !== "" ? (
      <p className="text-white">{texto}</p>
    ) : (
      <p className="text-gray-700">No disponible</p>
    )
  );

  
  return (
    <div className="pt-16">
      <h1 className="text-red-800 text-center font-extrabold text-3xl">
        {values[0]} {values[1]}
      </h1>
      <div className="flex bg-gray-600 justify-center h-full">
      <Swiper
        style={{flex: "2"}}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {fotos}
      </Swiper>
        
        <div className="ml-8 my-8" style={{flex: "1"}}>{campos}</div>
        <div className="ml-8 my-8" style={{flex: "1"}}>{descripcion}</div>
      </div>
    </div>
  );
};

export default Details;
