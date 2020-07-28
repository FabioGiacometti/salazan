import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCardById } from "../services";

const Details = () => {
  const [card, setCard] = useState("");
  let { id } = useParams();
  useEffect(() => {
    servicesGetCardById(id);
  }, []);

  const servicesGetCardById = async (id) => {
    const card = await getCardById(id);
    setCard(card);
  };

  return (
    <div>
      <p>{card.annio}</p>
    </div>
  );
};

export default Details;
