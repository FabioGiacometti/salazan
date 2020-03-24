import React from "react";
import CallToAction from '../header/CallToAction'
import empresa from '../../assets/images/empresa.png'

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { image, id, link, model, spec, price, conditions } = this.props.item;
    const handleSlide = this.props.handleSlide
    const img = empresa
    {
      console.log("%cthis is image", "font-size:30px", image);
    }
    return (
      <div
        className="h-full w-screen overflow-hidden bg-blue-500 flex flex-col items-center justify-center"
        style={{ height: "calc(100vh - 95.99px)", backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
      >
        <div className="relative h-full bg-gray-500 self-end flex flex-col justify-evenly p-16" style={{width:"25%"}}>
            <p className="font-black text-white text-6xl">{model}</p>
            <p className="font-black  text-3xl">{spec}</p>
            <hr/>
            <p>{price}</p>
            <p>Entrega y cuotas</p> 
            <br/>
            <CallToAction color={{backgroudColor:"green"}} text={"Ver Mas"} />
            <button onClick={handleSlide()}></button>
        </div>
      </div>
    );
  }
}
