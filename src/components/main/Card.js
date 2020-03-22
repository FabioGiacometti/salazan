import React from "react";
import vehiculos from "../../assets/vehiculos";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="h-auto w-auto ml-4 mt-4 bg-green-500" style={{width: "232px"}}>
        <img src="https://via.placeholder.com/232x174?text=Imagen+prueba+salazan+232+174" alt=""/>
        <h2 className="text-sm color-red-500 whitespace-pre-wrap" >{this.props.vehiculo.modelo}</h2>
        <p>
            
        </p>
      </div>
    );
  }
}
