import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import CallToAction from "./CallToAction";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
      const azulSalazan = "#001F31";
      const headerStyle = `flex w-screen flex items-center justify-evenly px- fixed h-12`;

      return (
        <>
          <div
            style={{ backgroundColor: azulSalazan, zIndex: "2" }}
            className={headerStyle}
          >
            <Logo />
            <Navigation />
            <div className="w-32">
              <CallToAction />
            </div>
          </div>
        </>
      );
    }
  }

