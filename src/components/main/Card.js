import React from "react";

const url = "http://www.salazanautomotores.com.ar/";

export default class Card extends React.Component {

  render() {
    // const uri = "../../assets/images/autos/";
    // const detalle = this.props.vehiculo.detalles;
    // const verMas = `${url}${detalle}`;
    const { specs, precio, foto, modelo } = this.props.vehiculo;
    const slicedSpecs = specs.split("#");
    const handleModal = this.props.handleModal;
    const bottomRow = "flex flex-row justify-between w-full";
    const cardStyle =
      "h-auto w-auto bg-white ml-4 mt-4 rounded-lg shadow hover:shadow-md overflow-hidden";
    const cardImageStyle = {
      backgroundImage: `url(${url}${foto})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
    const cardDetailClass = "text-gray-800";
    const cardContentStyle = "p-4 h-40 flex flex-col justify-between";
    return (
      <div
        className={cardStyle}
        style={{ maxWidth: "320px", minWidth: "240px", flex: "1" }}
      >
        {/* <a href={verMas}> */}
        <div className="h-48 bg-cover" style={cardImageStyle}></div>
        <div className={cardContentStyle}>
          <div>
            <h2 className="text-red-900 leading-tight">{modelo}</h2>
            <p className={cardDetailClass}>{slicedSpecs[0]}</p>
            <p className="text-gray-500">#{slicedSpecs[1]}</p>
          </div>
          <div className={bottomRow}>
            <p className="self-start">{precio}</p>
            <span
              className="text-right text-blue-700 hover:font-black"
              onClick={handleModal}
              style={{ cursor: "pointer " }}
            >
              {" "}
              Ver Mas
            </span>
          </div>
        </div>
        {/* </a> */}
      </div>
    );
  }
}
