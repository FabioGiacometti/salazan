import React from 'react';
import card from './card.scss';

const url = 'http://www.salazanautomotores.com.ar/';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const uri = '../../assets/images/autos/';
    const image = this.props.vehiculo.img;
    const detalle = this.props.vehiculo.detalles;
    const verMas = `${url}${detalle}`;
    const Bg = Math.floor(Math.random() * 16777215).toString(16);
    function invertHex(hex) {
      return (Number(`0x1${hex}`) ^ 0xffffff)
        .toString(16)
        .substr(1)
        .toUpperCase();
    }
    const Fc = invertHex(Bg);

    return (
      <div className="h-auto w-auto bg-white ml-4 mt-4 rounded-md shadow hover:shadow-md cardBody ">
        <a href={verMas}>
          {/*   <div className="overflow-hidden h-48" style={{backgroundImage:`url(${url}${this.props.vehiculo.foto})`, 
        backgroundSize: "cover", backgroundRepeat: "no-repeat"}}> */}
          <img
            className=" w-full"
            src={require('../../assets/images/auto1.jpg')}
            alt=""
          />

          <div className="p-4 flex flex-col">
            <h2 className="font-black text-red-700">
              {this.props.vehiculo.modelo}
            </h2>
            <p className="mt-2">{this.props.vehiculo.specs}</p>
            <div className="flex flex-row justify-between mt-4">
              <p className="">{this.props.vehiculo.precio}</p>
              <p className="text-right text-blue-700 hover:font-black">
                {' '}
                Ver Mas
              </p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
