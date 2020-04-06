import React from "react";
import card from './card.scss'

const url = "http://www.salazanautomotores.com.ar/"

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const uri ='../../assets/images/autos/' 
    const detalle = this.props.vehiculo.detalles
    const verMas = `${url}${detalle}`
    const {specs, precio, foto, modelo } =this.props.vehiculo
    const slicedSpecs = specs.split("#")
    return (
      <div className="h-auto w-auto bg-white ml-4 mt-4 rounded-md shadow hover:shadow-md cardBody ">
        <a href={verMas}>
          <div className="overflow-hidden h-48" style={{backgroundImage:`url(${url}${foto})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
          </div>
          <div className="p-4 flex flex-col">
            <h2 className="font-black text-red-700" >{modelo}</h2>
            <p className="mt-2" >{slicedSpecs[0]}</p>
            <p className="mt-2" >#{slicedSpecs[1]}</p>
            <div className="flex flex-row justify-between mt-4 items-end">
              <p className="" >{precio}</p>
              <p className="text-right text-blue-700 hover:font-black"> Ver Mas</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
