import React, { useEffect, Fragment } from "react";
import Card from "./Card";
import ContactButton from "./ContactButton";
import { useState } from "react";
import { getCards, getSheetsApi } from "../../services";

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);




  useEffect(() => {
    servicesGetCards();
    getSheetsApi();
  }, []);
  


  const servicesGetCards = async () => {
    const cards = await getCards();
    setItems(cards.data.vehiculos);
    setIsLoaded(true);
  };

  return (
    <Fragment>
      <div
        className="h-full w-full pr-4 bg-gray-300 flex flex-row flex-wrap min-h-screen"
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
