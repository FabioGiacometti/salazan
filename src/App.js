import React from 'react';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Aside from './components/aside/Aside'
import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="App h-screen " >
      <Header />
      <Carousel />
      <div className="flex flex-row h-auto w-full">
        <Aside />
        <Main />
      </div>
     
  </div>
  );
}

export default App;
