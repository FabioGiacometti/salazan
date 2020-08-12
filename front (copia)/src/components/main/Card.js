import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const url = "http://www.salazanautomotores.com.ar/";

const Card = (vehiculo) => {
  let card = vehiculo.vehiculo;

  const bottomRow = "flex flex-row justify-between w-full";
  const cardStyle =
    "h-auto w-auto bg-white ml-4 mt-4 rounded-lg shadow hover:shadow-md overflow-hidden relative card";
  const nafta = {
    textShadow: "black 0px 1px 1px",
    backgroundColor: "#00ff958f",
  };
  const diesel = {
    textShadow: "black 0px 1px 1px",
    backgroundColor: "#52abc68f",
  };
  const cardImageStyle = {
    backgroundImage: `url(${url}${card.foto})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const cardContentStyle = "p-4 h-32 flex flex-col justify-between";

  return (
    <div className={cardStyle} style={{ minWidth: "240px", maxWidth: "400px", flex: "1" }}>
    {/* {console.log("este es el prop asignado a la variable card", card)}  */}
      <Link to={`/${card.id}/detalle`}>
        <div className="h-48 bg-cover relative imagen" style={cardImageStyle}>
          <span
            className="text-white text-xs absolute right-0  py-1 px-2 rounded-bl-lg opacity-50"
            style={card.combustible === "NAFTA" ? nafta : diesel}>
            {card.combustible}
          </span>
        </div>
        <div className={cardContentStyle}>
          <div>
            <h2 className="text-gray-700 text-sm leading-tight">
              {card.marca} - {card.modelo}
            </h2>
            <p className="text-red-500 text-xs">{card.anio}</p>
            <p className="text-gray-500 text-xs">#{card.id}</p>
          </div>
          <div className={bottomRow}>
            <p className="self-start text-sm">
              $ {card.precio.toLocaleString()}
            </p>
            <p className="text-sm text-teal-600">Ver Mas</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Card;
