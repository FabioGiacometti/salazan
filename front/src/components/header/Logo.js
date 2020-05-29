import React from "react";

export default class Logo extends React.Component {

  render() {
    return (
      <img
        className="h-6 flex-shrink"
        src={require("../../assets/images/logoHoriz.png")}
        alt="Salazan Logo"
      />
    );
  }
}
