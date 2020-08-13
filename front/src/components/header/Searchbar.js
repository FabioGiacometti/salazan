import React, { useState } from 'react'
// import search from "../../assets/images"

const Searchbar = (props) => {
    const [searchValue, setSearchValue] = useState();
    const [isSearching, setIsSearching] = useState(false)
    
    return (
      <div className="flex w-1/3 sm:w-auto bg-gray-100 rounded-full items-center mx-0 mr-4 sm:mx-4 pr-3 shadow-inner relative focus:outline-none">
        <input
          placeholder="Introduzca su busqueda"
          type="text"
          // value=""
          className="w-full pl-4 py-4 h-4 rounded-full bg-gray-100"
          onChange={(e) => {props.funcion.getSearch(e.target.value); setIsSearching(true)}}
        />  
        {!isSearching ? (
          <img
            src={require("../../assets/images/search.png")}
            alt=""
            className="h-4 cursor-pointer absolute right-0 mr-2"
            onClick={() => props.funcion.getSearch(searchValue)}
          />
        ): null}
      </div>
    );
  };
  
  export default Searchbar;