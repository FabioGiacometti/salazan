import React from "react";
import AsideFilter from "./AsideFilter";
import asideItems from "../../assets/asideItems";
import CallToAction from "../header/CallToAction";

class Aside extends React.Component {

  render() {

    const asidefilters = asideItems.map(filtro => (
      <AsideFilter filtro={filtro} key={filtro.id}/>
    ));

    return (
      <div className="w-auto pr-4 h-full hidden md:block bg-gray-200 shadow-sm sticky">
        <div className="w-full h-auto px-4 py-2 flex flex-row justify-evenly items-center">
        
          <div className="items-end flex flex-row">
            {asidefilters}
          </div>

          <button className="w-auto py-1 px-5 bg-indigo-500 text-white">Filtrar vehiculos</button>
       
        </div>
      </div>
    );
  }
}

export default Aside;
