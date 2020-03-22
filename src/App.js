import React from 'react';
import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'

function App() {
  return (
    <div className="App h-screen " >
      <Header />
      <div className="flex flex-row h-full w-full">
        <Aside />
        <Main />
      </div>
     
  </div>
  );
}

export default App;
