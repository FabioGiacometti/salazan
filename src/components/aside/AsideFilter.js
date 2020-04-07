import React from "react";

export default class AsideFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const filt = this.props.filtro
    return (
      <div className="mt-4">
          <h2 className="text-xs text-red-800">
              {filt.title}
          </h2>

          <select className="w-full h-8 rounded p-1 text-xs bg-gray-100">
            {filt.items.map((item,index) => {return <option key={index}>{item}</option>})}
          </select>
         
      </div>
    );
  }
}
