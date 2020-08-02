import React from "react";
import Main from "../components/main/Main";
import Aside from "../components/aside/Aside";
import Carousel from "../components/carousel/Carousel";
import BottomNavigation from "../components/main/BottomNavigation";
import Latest from "../components/latest/latest";

const Home = () => {
  return (
    <div  
      className="App text-gray-900 overflow-x-hidden"
      >
      <Carousel />
      {/* <Latest/> */}
      <div className="flex flex-col h-full w-full">
        <Aside />
        <Main />
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Home;
