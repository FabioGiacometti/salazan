import React from "react";
import Icon from "react-icons-kit";

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

export default AsideFilter;
