import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCardById } from "../services";

const Details = () => {
  const [labels, setLabels] = useState();
  const [values, setValues] = useState();
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
  
  let fotos = images.map((imagenes) => <img src={`http://salazanautomotores.com.ar/${imagenes}`} alt={imagenes} />);
  const asyncLabels = Promise.all(labels.map(async label => <p>{label}</p>))

  return (
    <div className="pt-16">
      <p>{labels}</p>
      <p>{values}</p>
      {asyncLabels}
    {fotos}
    </div>
  );
};

export default Details;
