import React from "react";
import './headerlink.css'

function HeaderLink(props) {
  return (
    <div className="navItem flex justify-center items-center h-full">
      <a href="http://salazan.now.sh" onClick={null} className="navButton">
        <button className="w-full h-full flex flex-col self-end items-center sm:items-start font-light text-blue-100 text-xs transition-all duration-1000 ease-in-out">
          <img
            className="flex w-auto h-4"
            src={require(`../../assets/images/${props.icon}.png`)}
            alt=""
          />
          {props.title}
          <div className="h4 w1 bg-blue-500"></div>
        </button>
      </a>
    </div>
  );
}

export default HeaderLink;
