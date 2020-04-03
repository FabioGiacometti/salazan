import React from 'react'

export default class CallToAction extends React.Component {
    static defaultProps = {
        text: "Vender",
        img: require(`../../assets/images/autoAhorro.png`), 
        bg: "red",
        styler: {margin: "0", padding: "20px"}
    }
    
    render(){
        const { bg, img, styler } = this.props
        console.log("esto es estyler:", styler)
        return(

            <>
                <button 
                style={{styler}}
                className={`px-6 py-1 bg-${bg}-600 border-${bg}-800 text--100 text-lg rounded flex justify-evenly items-center font-bold border md:static fixed right-0 bottom-0`}
                onClick={()=>console.log(this)}
                >
                {this.props.img && <img className="mr-4 h-10" src={require(`${img}`)}/> }
                    {this.props.text}
                </button>
            </> 
        )
    }
}