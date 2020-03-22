import React from "react";
import Navigation from "./header/Navigation";
import Logo from "./header/Logo";
import CallToAction from "./header/CallToAction";

export default class Header extends React.Component {
  constructor() {
    super();
    state: {
    }
  }

  render() {
    return (
      <div
        className="flex justify-center "
        style={{ backgroundColor: "#001F31" }}
      >
        <div
          style={{ maxWidth: "1480px" }}
          className="w-screen h-24 flex items-center justify-around "
        >
          <Logo />
          <Navigation />
          <CallToAction />
        </div>
      </div>
    );
  }
}
