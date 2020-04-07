import React from "react";
import CallToAction from "../header/CallToAction";
import empresa from "../../assets/images/empresa.png";

export default class Slide extends React.Component {
  render() {
    const { image, id, link, model, spec, price, conditions } = this.props.item;
    const handleSlide = this.props.handleSlide;
    const img = empresa;
    const slideContentClass ="relative h-full my-20 mx-12 self-start md:flex flex-col justify-evenly p-16 hidden items-center"
    const priceClass = "font-black text-5xl text-white py-2 px-4 border-2 border-yellow-300 "
    const carImageClass="h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover"
    const specClass ="font-light text-4xl text-white"
    return (
      <div
        className={carImageClass}
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <div className={slideContentClass} style={{backgroundColor:"#00000050"}}>
          
          <p
            className="font-black text-white text-6xl"
            style={{ textShadow: "0 2px 2px gray" }}
          >
            {model}
          </p>
          <p className={specClass}>{spec}</p>
          <hr />
          <p className={priceClass}>{price}</p>
          <p>Entrega y cuotas</p>
          <br />
          <CallToAction bg={"gray-300"} text={"Ver Mas"} img={null} styler={{padding:"130px"}}/>
          <button onClick={handleSlide()}></button>
        </div>
      </div>
    );
  }
}
