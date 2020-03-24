import React from 'react'

export default class CallToAction extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <button 
                // style={this.props.color ? this.props.color: null}
                className="px-6 py-1 bg-red-600 text-red-100 text-lg rounded flex justify-evenly items-center font-bold border border-red-900"
                onClick={()=>console.log(this)}
                >
                <img className="mr-4 h-10" src={this.props.img ? require(this.props.img) : require('../../assets/images/autoAhorro.png')}/> 
                    {this.props.text? this.props.text : "Vender"}
                </button>
            </div>
        )
    }
}