import React from "react";
import Card from "./main/Card";
import vehiculos from "../assets/vehiculos";
// import fotos from '../assets/fotos'
// import {fotoObj} from './helper'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let data = [];
    // for (let i = 0; i < vehiculos.length; i++) {
    //   data.push({...fotos[i], ...vehiculos[i] });
    // }
    // console.log("%cesto es data", "color:green; font-size:30", data);
    

    const cards = vehiculos.map(vehiculo => <Card vehiculo={vehiculo} />); 
    // console.log("%cesto es data", "color:red", data)
    return (
      <div
        className="w-full pr-4 bg-gray-200 flex flex-row flex-wrap"
        style={{ height: "100%", overflow: "scroll" }}
      >
        {cards}
      </div>
    );
  }
}
