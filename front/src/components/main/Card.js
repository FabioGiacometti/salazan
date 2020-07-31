import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Details from "../../pages/details";
const url = "http://www.salazanautomotores.com.ar/";

const Card = (vehiculo) => {
  const [card] = useState(vehiculo.vehiculo);
  const cardId = card.id.replace("#", "");
  const slicedSpecs = card.specs.split("#");
  const año = slicedSpecs[0].split(" - ");
  const bottomRow = "flex flex-row justify-between w-full";
  const cardStyle =
    "h-auto w-auto bg-white ml-4 mt-4 rounded-lg shadow hover:shadow-md overflow-hidden relative";
  const cardDetailClass = "text-gray-800";
  const cardImageStyle = {
    backgroundImage: `url(${url}${card.foto})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const cardContentStyle = "p-4 h-40 flex flex-col justify-between";
  return (
    <div className={cardStyle} style={{ minWidth: "240px", flex: "1" }}>
      <Link to={`/${cardId}/detalle`}>
        <span
          className="text-white font-bold absolute right-0 py-1 px-2 "
          style={{ textShadow: "0px 1px 1px black" }}>
          {año[1]}
        </span>
        <div className="h-48 bg-cover" style={cardImageStyle}></div>
        <div className={cardContentStyle}>
          <div>
            <h2 className="text-gray-900 font-bold leading-tight">
              {card.modelo}
            </h2>
            <p className="text-red-500">{año[0]}</p>
            {/* <p className="text-gray-500">#{cardId}</p> */}
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
