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
      <div className="w-auto pr-4 h-full hidden md:block shadow-sm sticky" style={{backgroundImage: "linear-gradient(135deg, #e8e8e8 25%, #e6e6e6 25%, #e6e6e6 50%, #e8e8e8 50%, #e8e8e8 75%, #e6e6e6 75%, #e6e6e6 100%)", backgroundSize: "8px 8px"}}>
        <div className="w-full h-auto px-4 py-2 flex flex-row justify-evenly items-center">
        
          <div className="items-end flex flex-row justify-start w-full">
            {asidefilters}
          </div>

          <button className="w-48 py-1 px-1 bg-green-500 text-white rounded-lg self-end">Filtrar vehiculos</button>
       
        </div>
      </div>
    );
  }
}

export default Aside;
