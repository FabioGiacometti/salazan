import React, { useState, useEffect } from "react";
import { getCards, getLatestCards } from "../../services";

const Latest = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    servicesGetCards();

  }, []);

  const servicesGetCards = async () => {
    const cards = await getCards();
    setItems(cards.data.vehiculos);
  };

  // const latestCards = items.sort(getLatestCards).slice(0, 15);

  /* let ultimosAutos = latestCards.map((auto) => (
    <Minicard auto={auto} key={auto.cod_auto} />
  )); */
  return (
    <div className="w-full h-64 bg-red-500 flex items">{/* {items} */}</div>
  );
};

const Minicard = (props) => {
  return (
    <div className="w-32 h-32 bg-orange-100 mr-4">
      <p>{props.auto.marca.marca}</p>
      <p>{props.auto.modelo.modelo}</p>
    </div>
  );
};
export default Latest;
