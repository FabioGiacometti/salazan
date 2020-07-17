import React from 'react'
// import search from "../../assets/images"

export default class Searchbar extends React.Component{

    render(){
        return(
            <div className="flex w-1/3 sm:w-auto bg-gray-100 rounded-full items-center mx-0 mr-4 sm:mx-4 pr-3 shadow-inner relative ">
                <input type="text" className="w-full pl-4 py-4 h-4 rounded-full bg-gray-100"/>
                <img src={require("../../assets/images/search.png")} alt="" className="h-3"/>
            </div>
        )
    }
}