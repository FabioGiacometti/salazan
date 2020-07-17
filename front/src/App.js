import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Aside from "./components/aside/Aside";
import Carousel from "./components/carousel/Carousel";
import BottomNavigation from "./components/main/BottomNavigation";

class App extends React.Component {
  render() {
    return (
      <div className="App h-screen overflow-x-hidden text-gray-900" style={{fontFamily: "sans-serif"}}>
        <Header/>
        <Carousel />
        <div className="flex flex-col h-full w-full">
          <Aside />
          <Main />
          <BottomNavigation />
        </div>
      </div>
    );
  }
}

export default App;
