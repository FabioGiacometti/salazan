import React from "react";

export default class  CallToAction extends React.Component {
  static defaultProps = {
    text: "Vender",
    img: require(`../../assets/images/autoAhorro.png`),
    bg: "red",
    // styler: {
    //   margin: "0",
    //   padding: "20px",
    // },
  };

  render() {
    const { bg, img, styler } = this.props;
    const ButtonClass = `px-6 bg-${bg}-600 border-${bg}-700 text--100 text-lg rounded flex justify-evenly items-center font-bold text-white border md:static fixed right-0 bottom-0`;
   
    return (
      <>
        <button
          style={{ styler }}
          className={ButtonClass}
          onClick={() => console.log(this)}
        >
          {this.props.img && (
            <img
              className="mr-4 h-10"
              src={require("../../assets/images/autoAhorro.png")}
            />
          )}
          {this.props.text}
        </button>
      </>
    );
  }
}
