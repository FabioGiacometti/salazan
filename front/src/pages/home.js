import React from "react";
import Main from "../components/main/Main";
import Carousel from "../components/carousel/Carousel";
import BottomNavigation from "../components/main/BottomNavigation";

const Home = (busqueda) => {
  return (
    <div className="App text-gray-900 overflow-x-hidden">
      <Carousel />
      <div className="flex flex-col h-full w-full">
        <Main busqueda={busqueda.busqueda}/>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Home;
