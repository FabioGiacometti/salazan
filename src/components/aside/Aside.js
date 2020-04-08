import React from "react";
import AsideFilter from "./AsideFilter";
import asideItems from "../../assets/asideItems";
import CallToAction from "../header/CallToAction";

class Aside extends React.Component {

  render() {

    const asidefilters = asideItems.map(filtro => (
      <AsideFilter filtro={filtro} key={filtro.id}/>
    ));
    const asideFilterContainers = "w-full h-auto pl-4 pt-4 flex flex-col justify-evenly"
    const asideContainer = "w-64 pr-4 h-full hidden md:block bg-gray-200"
    return (
      <div className={asideContainer}>
        <div className={asideFilterContainers}>
        <h2 className="font-black text-gray-600">Filtrar Vehiculos</h2>
          {asidefilters}
        <hr style={{marginTop:"20px"}}/>
        <CallToAction
          text={"Filtrar"}
          bg={"red"}
          styler={{margin: "1em auto", padding: "100px"}}
          img={null}
        />
        </div>
      </div>
    );
  }
}

export default Aside;
