import React from "react";
import './headerlink.css'

function HeaderLink(props) {
  console.log(props)
  return (
    <a className="navItem flex justify-center items-center h-full" href={props.dir} target="self">
      <div onClick={null} className="navButton">
        <button className="w-full h-full flex flex-col self-end items-center sm:items-start font-light text-blue-100 text-xs transition-all duration-1000 ease-in-out">
          <img
            className="flex w-auto h-4"
            src={require(`../../assets/images/${props.icon}.png`)}
            alt=""
          />
          {props.title}
          <div className="h4 w1 bg-blue-500"></div>
        </button>
      </div>
    </a>
  );
}

export default HeaderLink;
