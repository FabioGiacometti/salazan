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
      <div className="h-auto w-auto bg-white ml-4 mt-4 rounded-md shadow hover:shadow-md cardBody ">
        <a href="{verMas}">
          <div className="h-auto w-auto overflow-hidden object-fill">
            <img  className=""
            src={`https://picsum.photos/280/280`} 
            // src={`https://via.placeholder.com/232x174/${Bg}/${Fc}/?text=Imagen+prueba+salazan+232+174`} 
            // src={`https://via.placeholder.com/232x174/?text=Imagen+prueba+salazan+232+174`} 
            alt=""/>
          </div>
          <div className="p-4 flex flex-col">
            <h2 className="font-black text-red-700" >{this.props.vehiculo.modelo}</h2>
            <p className="mt-2" >{this.props.vehiculo.specs}</p>
            <div class="flex flex-row justify-between mt-4">
              <p className="" >{this.props.vehiculo.precio}</p>
              <a href={verMas} className="text-right text-blue-700 hover:font-black"> Ver Mas</a>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
