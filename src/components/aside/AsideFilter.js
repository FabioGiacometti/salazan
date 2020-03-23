import React from "react";

export default class AsideFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const filt = this.props.filtro
    return (
      <div>
          <h1 className="text-lg text-red-800 mt-2">
              {filt.title}
          </h1>

          <select className="w-full h-8 rounded p-1 text-xs">
            {filt.items.map((item,index) => {return <option key={index}>{item}</option>})}
          </select>
         
        {console.log("este es el tipo de filt.item", Array.isArray(filt.items))}        
      </div>
    );
  }
}
