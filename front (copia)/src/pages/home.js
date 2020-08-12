import React from "react";
import Main from "../components/main/Main";
import Aside from "../components/aside/Aside";
import Carousel from "../components/carousel/Carousel";
import BottomNavigation from "../components/main/BottomNavigation";
import Latest from "../components/latest/latest";

const Home = (busqueda) => {
  let item = busqueda
  console.log("esto es busqueda en el home", item)
  return (
    <div className="App text-gray-900 overflow-x-hidden">
      {item === undefined ? null : <Carousel />}
      {/* <Latest/> */}
      <div className="flex flex-col h-full w-full">
        <Main busqueda={busqueda.busqueda} />
        <BottomNavigation/>
      </div>
    </div>
  );
};

export default Home;
