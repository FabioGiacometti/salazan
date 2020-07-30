import React, { useEffect, Fragment } from "react";
import Card from "./Card";
import ContactButton from "./ContactButton";
import { useState } from "react";
import { getCards } from "../../services";
const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    servicesGetCards();
  }, []);

  const servicesGetCards = async () => {
    const cards = await getCards();
    console.log('CARDSDSDASDASD', cards)
    setItems(cards.data.vehiculos);
    setIsLoaded(true);
  };

  console.count("isloaded", isLoaded);

  return (
    <Fragment>
      <div
        className="h-full w-full pr-4 bg-gray-300 flex flex-row flex-wrap"
        style={{}}
        id="main">
        {items.length > 0
          ? items.map((card, index) => {
              return <Card vehiculo={card} key={index} />;
            })
          : ""}
        <ContactButton />
      </div>
    </Fragment>
  );
};

export default Main;
