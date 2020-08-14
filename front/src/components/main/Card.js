import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const url = "http://www.salazanautomotores.com.ar/";

const Card = (vehiculo) => {
  let card = vehiculo.vehiculo;

  const bottomRow = "flex flex-row justify-between w-full";
  const cardStyle =
    "h-auto w-auto bg-white ml-4 mt-4 rounded-lg shadow-sm hover:shadow-lg overflow-hidden relative card transition-all";
  const nafta = {
    textShadow: "black 0px 1px 1px",
    backgroundColor: "#00ff95",
    transition:"all 300ms" 
  };
  const diesel = {
    textShadow: "black 0px 1px 1px",
    backgroundColor: "#52abc6",
    transition:"all 300ms" 
  };
  const cardImageStyle = {
    backgroundImage: `url(${url}${card.foto})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const cardContentStyle = "px-4 pb-4 pt-1 h-32 flex flex-col justify-between";

  return (
    <div
      className={cardStyle}
      style={{ minWidth: "240px", maxWidth: "400px", flex: "1", transition:"all 300ms" }}
    >
      <Link to={`/${card.id}/detalle`}>
        <div className="h-48 bg-cover relative imagen" style={cardImageStyle}>
          <span
            className="text-white text-xs absolute right-0  py-1 px-2 rounded-bl-lg opacity-50"
            style={card.combustible === "NAFTA" ? nafta : diesel}
          >
            {card.combustible}
          </span>
        </div>
        <div className={cardContentStyle}>
          <div>
          <span className="text-gray-500 text-xs leading-none">
              #{card.id}
            </span>
            <h2 className="text-gray-800 text-sm leading-none ">
              {card.modelo}
            </h2>
            <p className="text-gray-600 text-sm ">{card.anio} </p>
           
          </div>
          <div className={bottomRow}>
            <p className="self-start">
              <span class="text-gray-500">$</span>{" "}
              {card.precio.toLocaleString()}
            </p>
            <p
              className="text-sm text-gray-600"
              // style={{ padding: "8px", marginTop: "-8px" }}
            >
              Ver Mas
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Card;
