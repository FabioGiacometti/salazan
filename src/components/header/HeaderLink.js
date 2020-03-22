import React from "react";

function HeaderLink(props) {
  return (
    <div className="flex justify-center items-center">
      <a>
        <button className="py-1 h-full w-full flex flex-row self-end items-center font-bold text-blue-100  text-xs md:text-base">
          <img
            className="hidden md:flex w-auto h-6 mr-4"
            src={require(`../../assets/images/${props.icon}.png`)}
          />
          {props.title}
        </button>
      </a>
    </div>
  );
}

export default HeaderLink;
