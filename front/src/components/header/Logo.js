import React from "react";
import { Link } from "react-router-dom";

export default class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <img
          className="h-6 flex-shrink"
          src={require("../../assets/images/logoHoriz.png")}
          alt="Salazan Logo"
        />
      </Link>
    );
  }
}
