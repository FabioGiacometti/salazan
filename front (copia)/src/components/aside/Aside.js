import React, { useState } from "react";
import asideItems from "../../assets/asideItems";
import Icon from "react-icons-kit";

// import CallToAction from "../header/CallToAction";

const Aside = (props) => {
  // const [marca, setMarca] = useState(null);
  // const [combustible, setCombustible] = useState(null);
  // const [precio, setPrecio] = useState(null);
  // const [año, setAño] = useState(null);

// console.log(props)
  return (
    <div className="w-auto pr-4 h-full hidden md:flex shadow-sm items-center" style={{
      backgroundImage:
        "linear-gradient(135deg, #e8e8e8 25%, #e6e6e6 25%, #e6e6e6 50%, #e8e8e8 50%, #e8e8e8 75%, #e6e6e6 75%, #e6e6e6 100%)",
      backgroundSize: "8px 8px",
    }}>
      <form
        
        >
        <div className="w-full h-auto px-4 py-2 flex flex-row justify-evenly items-bottom">
          <div className="items-end flex flex-row justify-start w-full flex-1">
            <AsideFilter filtro={asideItems[0]} />
          </div>

          <div className="items-end flex flex-row justify-start w-full flex-1">
            <AsideFilter filtro={asideItems[2]} />
          </div>

          <div className="items-end flex flex-row justify-start w-full flex-1">
            <AsideFilter filtro={asideItems[3]} />
          </div>

          <div className="items-end flex flex-row justify-start w-full flex-1">
            <AsideFilter filtro={asideItems[4]} />
          </div>

          <div className="items-end flex flex-row justify-start w-full flex-1">
            <AsideFilter filtro={asideItems[5]} />
          </div>

          <div className="items-end flex flex-row justify-start w-full flex-1">
            <AsideFilter filtro={asideItems[6]} />
          </div>
        </div>
      </form>

      <button
        className="w-48 py-1 px-1 bg-green-500 text-white rounded-lg flex-1 self-end mb-1"
        onClick={()=>props.funcion("Ford")}
        >
        Filtrar vehiculos
      </button>
    </div>
  );
};

const AsideFilter = (props) => {
  const filt = props.filtro;
  const icon = filt.icon;
  return (
    <div className="mt-2 mr-2 min-w-64 flex-1">
      <div className="flex flex-row text-gray-700 items-center ">
        {icon && <Icon icon={icon} style={{ marginRight: "8px" }} />}
        {filt.title && (
          <h2 className="text-sm text-gray-800 mt-2 mb-1">{filt.title}</h2>
        )}
      </div>

      <select className="w-full h-10 px-2 rounded-lg text-xs bg-gray-100">
        {filt.items.map((item, index) => {
          return (
            <option key={index} className="p-10 shadow-md">
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Aside;
