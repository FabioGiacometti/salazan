import React from "react";
import Navigation from "./Navigation";
import Searchbar from './Searchbar'
import Logo from "./Logo";
import CallToAction from "./CallToAction";
import Burger from "./Burger";


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

      const azulSalazan = "#001F31";

      return (
        <>
          <div
            style={{ backgroundColor: azulSalazan, zIndex: "2", top: 0}}
            className=' fixed w-full flex items-center justify-between sm:justify-evenly py-3 md:py-0 px-4 md:px-0'
          >
            <Logo />
            <Navigation />
            <Searchbar />
            <div className="sm:mr-4 hidden sm:flex">
              <CallToAction />
            </div>
          </div>
        </>
      );
    }
  }