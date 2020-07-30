import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Details from "../../pages/details";
const url = "http://www.salazanautomotores.com.ar/";

const Card = (vehiculo) => {
  const [card] = useState(vehiculo.vehiculo);
  const cardId = card.id.replace("#", "");
  const bottomRow = "flex flex-row justify-between w-full";
  const cardStyle =
    "h-auto w-auto bg-white ml-4 mt-4 rounded-lg shadow hover:shadow-md overflow-hidden";
  const cardImageStyle = {
    backgroundImage: `url(${url}${card.foto})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const cardContentStyle = "p-4 h-40 flex flex-col justify-between";
  return (
    <div className={cardStyle} style={{ minWidth: "240px", flex: "1" }}>
      <Link to={`/${cardId}/detalle`}>
        <div className="h-48 bg-cover" style={cardImageStyle}></div>
        <div className={cardContentStyle}>
          <div>
            <h2 className="text-red-900 leading-tight">{card.modelo}</h2>
            <p className="text-gray-500">#{cardId}</p>
          </div>
          <div className={bottomRow}>
            <p className="self-start">{card.precio}</p>
            Ver Mas
          </div>
        </div>
    </Link>
      </div>
  );
};
export default Card;
