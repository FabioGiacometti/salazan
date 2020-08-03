import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCardById } from "../services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const Details = () => {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const [images, setImages] = useState([]);
  const [visitas, setVisitas] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    servicesGetCardById(id);
  }, []);

  const servicesGetCardById = async (id) => {
    const cardex = await getCardById(id);
    setLabels(cardex.data.detalleKey);
    setValues(cardex.data.detalleValue);
    setImages(cardex.data.pictures);
    setVisitas(cardex.data.visitas);
  };

  let fotos = images.map((imagenes) => (
    <SwiperSlide>
      <div
        className="h-full justify-center items-center m-auto"
        style={{
          backgroundImage: `url("http://salazanautomotores.com.ar/${imagenes}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}></div>
      <h3 className="text-gray">Deslize para ver mas fotos</h3>
    </SwiperSlide>
  ));

  let campos = labels.map((texto) =>
    texto !== "" ? (
      <p
        className="text-yellow-500 mt-2 border-dashed border-b-2 border-yellow-500"
        style={{ borderBottom: "solid 1px #ffffff50" }}>
        {texto}
      </p>
    ) : null
  );

  let descripcion = values.map((texto) =>
    texto !== "" ? (
      <p
        className="text-white mt-2"
        style={{ borderBottom: "solid 1px #ffffff50" }}>
        {" "}
        {texto}
      </p>
    ) : (
      <p
        className="text-gray-700 mt-2"
        style={{ borderBottom: "solid 1px #ffffff50" }}>
        No disponible
      </p>
    )
  );

  return (
    <div className="mt-12 md:mt-16 w-full md:max-w-6xl mx-auto mb-16 shadow-2xl rounded-lg bg-gray-200">
      <Swiper
          className="flex md:hidden"
          style={{ flex: "1", height: "350px", margin: "auto" }}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          {fotos}
        </Swiper>
      <div className="flex justify-center h-full relative flex-wrap">
        <Swiper
          className="hidden md:flex"
          style={{ flex: "1", height: "500px", margin: "auto" }}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          {fotos}
        </Swiper>
        <h3 className="absolute hidden sm:static" style={{ bottom: "20px", left: "20px" }}>
          Deslizar para ver mas imagenes
        </h3>
        <div style={{ flex: "1", background: "#828282" }}>
          <div className="mx-auto w-auto">
            <h1
              className="text-gray-200 ml-8 mt-8 font-extrabold text-3xl"
              style={{ textShadow: "0px 2px 1px #00000050" }}>
              {values[0]} {values[1]}
            </h1>
            <div className="flex mt-6 items-center">
              <div className="ml-8 my-auto">{campos}</div>
              <div className="pl-8 my-auto">{descripcion}</div>
            </div>
            <p className="mt-6 ml-8 text-white pb-16">
              Este auto recibió{" "}
              <span className="font-bold text-red-700">{visitas}</span> visitas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
