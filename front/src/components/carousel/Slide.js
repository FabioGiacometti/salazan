import React from "react";
import CallToAction from "../header/CallToAction";
// import empresa from "../../assets/images/empresa.png";

export default class Slide extends React.Component {
  render() {
    const { image, model, spec, price } = this.props.item;
    const handleSlide = this.props.handleSlide;
    // const img = empresa;
    return (
      <div
        className="h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}>
        <div
          className="w-full sm:w-auto relative h-full m-0 md:my-20 md:mx-12 self-start flex flex-col justify-evenly sm:p-16 items-center"
          style={{ backgroundColor: "#00000050" }}>
          <p
            className="font-black text-white text-6xl"
            style={{ textShadow: "0 2px 2px gray" }}>
            {model}
          </p>
          <p className="font-light text-4xl text-white">{spec}</p>
          <hr />
          <p className="font-black text-5xl text-white py-2 px-4 border-2 border-yellow-300 ">
            {price}
          </p>
          <h4 className="text-white">Entrega y cuotas</h4>
          <br />
          <CallToAction
            bg={"gray-300"}
            text={"Ver Mas"}
            img={null}
            styler={{ padding: "130px" }}
          />
          <button onClick={() => handleSlide()}></button>
        </div>
      </div>
    );
  }
}
