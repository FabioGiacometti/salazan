import React from "react";
import Main from "../components/main/Main";
import Aside from "../components/aside/Aside";

const Usados = (busqueda) => {
  // console.log("esto es busqueda en usados", busqueda)
  
  return (
    <>
      <div className="mt-12"></div>
      {/* <Aside props={props} /> */}
      <Main busqueda={busqueda.busqueda} />
    </>
  );
};

export default Usados;
