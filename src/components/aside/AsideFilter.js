import React from "react";
import { FaCar, FaCommentDollar,  } from "react-icons/fa";
import { MdNewReleases, MdLocalGasStation, MdDateRange } from "react-icons/md";

export default class AsideFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const filt = this.props.filtro
      const icon = filt.icon
    return (
      <div className="mt-2">
        <icon /> {filt.title && <h2 className="text-xs text-red-800 mt-2">
              {filt.title}
          </h2>
}
          <select className="w-full h-8 rounded-xl p-1 text-xs bg-gray-100">
            {filt.items.map((item,index) => {return <option key={index}>{item}</option>})}
          </select>
         
      </div>
    );
  }
}
