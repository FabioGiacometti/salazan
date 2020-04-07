import React from "react";
import AsideFilter from "./AsideFilter";
import asideItems from "../../assets/asideItems";
import CallToAction from "../header/CallToAction";

class Aside extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const asidefilters = asideItems.map(filtro => (
      <AsideFilter filtro={filtro} />
    ));
    const asideFilterContainers = "w-full h-auto pl-4 pt-4 flex flex-col justify-evenly"
    const asideContainer = "w-64 pr-4 h-full hidden md:block "
    return (
      <div className={asideContainer}>
        <div className={asideFilterContainers}>
          {asidefilters}
        <hr style={{marginTop:"20px"}}/>
        <CallToAction
          text={"Vender"}
          bg={"green"}
          styler={"margin: 1em auto"}
        />
        </div>
      </div>
    );
  }
}

export default Aside;
