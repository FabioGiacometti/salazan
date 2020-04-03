import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import CallToAction from "./CallToAction";

export default class Header extends React.Component {
  constructor() {
    super();
    state: {
    }
  }

  render() {
    return (
      <>
        <div
          style={{ /* maxWidth: "1480px", */ backgroundColor: "#001F31" }}
          className="flex justify-center w-screen h-24 flex items-center justify-around "
        >
          <Logo />
          <Navigation />
          <CallToAction />
        </div>
      </>
    );
  }
}
