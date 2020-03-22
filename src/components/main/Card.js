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
    const Bg = Math.floor(Math.random()*16777215).toString(16)
    function invertHex(hex) {
      return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
    }
    const Fc = invertHex(Bg)
    return (
      <div className="h-auto w-auto bg-white ml-4 mt-4 rounded shadow-lg cardBody ">
        <div className="h-32 w-32 overflow-hidden object-fill">
          <img  className=""
          src={`https://picsum.photos/300/300`} 
          // src={`https://via.placeholder.com/232x174/${Bg}/${Fc}/?text=Imagen+prueba+salazan+232+174`} 
          // src={`https://via.placeholder.com/232x174/?text=Imagen+prueba+salazan+232+174`} 
          alt=""/>
        </div>
        <div className="p-4">
          <h2 className="" >{this.props.vehiculo.modelo}</h2>
          <p className="" >{this.props.vehiculo.specs}</p>
          <p className="" >{this.props.vehiculo.precio}</p>
          <a href={verMas}> Ver Mas</a>
        </div>
      </div>
    );
  }
}
