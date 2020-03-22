import React from "react";

export default class Logo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <img
        className="h-20 flex-shrink"
        src={require("../../assets/images/logo.png")}
      />
    );
  }
}
