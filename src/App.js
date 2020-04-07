import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Aside from "./components/aside/Aside";
import Carousel from "./components/carousel/Carousel";

class App extends React.Component {
  render() {
    return (
      <div className="App h-screen overflow-x-hidden ">
        <Header/>
        <Carousel />
        <div className="flex flex-row h-full w-full">
          <Aside />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
