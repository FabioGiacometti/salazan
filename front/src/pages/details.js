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
        className="h-full bg-red-700"
        style={{
          backgroundImage: `url("http://salazanautomotores.com.ar/${imagenes}")`,
          backgroundSize: "cover",
        }}></div>
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
      <p className="text-white mt-2" style={{ borderBottom: "solid 1px #ffffff50" }}>
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
    <div className=" overflow-hidden mt-16 max-w-6xl mx-auto mb-16 shadow-2xl rounded-lg ">
      <div
        className="flex justify-center h-full"
        style={{ background: "#828282" }}>
        <Swiper
          style={{ flex: "1" }}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          {fotos}
        </Swiper>

        <div style={{ flex: "1" }}>
          <div className="mx-auto w-auto">
            <h1 className="text-red-700 ml-8 mt-8 font-extrabold text-3xl">
              {values[0]} {values[1]}
            </h1>
            <div className="flex mt-6 items-center">
              <div className="ml-8 my-auto">{campos}</div>
              <div className="pl-8 my-auto">{descripcion}</div>
            </div>
            <p className="mt-6 ml-8 text-white pb-16">
              Este auto recibio{" "}
              <span className="font-bold text-red-700">{visitas}</span> visitas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
