import React from "react";
import Icon from "react-icons-kit";
import {
  MdNewReleases,
  MdLocalGasStation,
  MdDateRange,
} from "react-icons-kit/md/";

export default class AsideFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filt = this.props.filtro;
    const icon = filt.icon;
    // console.log("esto es icon", icon.split('"'))
    return (
      <div className="mt-2">
        <div className="flex flex-row text-red-700 items-center">
          {icon && <Icon icon={icon} style={{marginRight: "8px"}}/>}
          {filt.title && (
            <h2 className="text-sm text-red-800 mt-2 mb-1">{filt.title}</h2>
          )}
        </div>

        <select className="w-full h-8 rounded-xl p-1 text-xs bg-gray-100">
          {filt.items.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>
    );
  }
}
