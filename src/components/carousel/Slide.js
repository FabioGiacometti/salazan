import React from "react";
import CallToAction from "../header/CallToAction";
import empresa from "../../assets/images/empresa.png";

export default class Slide extends React.Component {
  render() {
    const { image, id, link, model, spec, price, conditions } = this.props.item;
    const handleSlide = this.props.handleSlide;
    const img = empresa;
    {
    }
    return (
      <div
        className="h-full w-screen overflow-hidden flex flex-col items-center justify-center"
        style={{
          height: "calc(100vh - 95.99px)",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%"
        }}
      >
        <div
          className="relative h-full my-6 mx-12 bg-gray-400 self-end md:flex flex-col justify-evenly p-16 hidden "
        >
          <p className="font-black text-white text-6xl" 
          style={{textShadow: "0 2px 2px gray"}}>
            {model}
         </p>
          <p className="font-black  text-3xl">{spec}</p>
          <hr />
          <p>{price}</p>
          <p>Entrega y cuotas</p>
          <br />
          <CallToAction bg={"pink"} text={"Ver Mas"} />
          <button onClick={handleSlide()}></button>
        </div>
      </div>
    );
  }
}
