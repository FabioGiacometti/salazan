import React from 'react'

export default class CallToAction extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <button 
                className="px-6 py-1 bg-red-600 text-red-100 text-lg rounded flex justify-evenly items-center font-bold border border-red-900"
                onClick={()=>console.log(this)}
                >
                <img className="mr-4 h-10" src={require('../../assets/images/autoAhorro.png')}/> 
                    Vender
                </button>
            </div>
        )
    }
}