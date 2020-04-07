import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import CallToAction from "./CallToAction";

let yPosition = window.scrollY;
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerHeight: "h-16",
    };
  }

  render() {
    
      console.log("props", this.props)
      const headerSet = () => {
        this.props.mainScroll > 100
          ? this.setState({ headerHeight: "h-16" })
          : this.setState({ headerHeight: "h-20" });
      };
      console.log("esto es headerHeight", yPosition);
      const azulSalazan = "#001F31";
      const headerStyle = `flex w-screen flex items-center justify-evenly px-8 fixed ${this.state.headerHeight}`;

      return (
        <>
          <div
            style={{ backgroundColor: azulSalazan, zIndex: "2" }}
            className={headerStyle}
          >
            <Logo />
            <Navigation />
            <CallToAction />
          </div>
        </>
      );
    }
  }

