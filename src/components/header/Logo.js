import React from "react";

export default class Logo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <img
        className="h-8 flex-shrink"
        src={require("../../assets/images/logoHoriz.png")}
      />
    );
  }
}
