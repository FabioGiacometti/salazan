import React from "react";
import card from './card.scss'

const url = "http://www.salazanautomotores.com.ar/"
export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const detalle = this.props.vehiculo.detalles
    const verMas = `${url}${detalle}`
    const setBg = () => {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#" + randomColor;
      color.innerHTML = "#" + randomColor;
    }
    // console.log("%cesto es detalle", "font-size:30px", this.props.detalles)
    return (
      <div className="h-auto w-auto ml-4 mt-4 rounded cardBody">
        <img className="w-full" src={`https://via.placeholder.com/232x174/${setBG}/${setBG}/?text=Imagen+prueba+salazan+232+174`} alt=""/>
        <div className="p-4">
          <h2 className="text-sm color-red-500 whitespace-pre-wrap" >{this.props.vehiculo.modelo}</h2>
          <p className="text-sm color-red-500 whitespace-pre-wrap" >{this.props.vehiculo.specs}</p>
          <p className="text-sm color-red-500 whitespace-pre-wrap" >{this.props.vehiculo.precio}</p>
          <a href={verMas}> Ver Mas</a>
        </div>
      </div>
    );
  }
}
