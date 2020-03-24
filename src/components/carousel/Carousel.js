import React from 'react'
import slides from '../../assets/slides'
import Slide from './Slide'

export default class Carousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.glider = React.createRef()
    }

    handleSlide(){
        console.log("he sido presionado!")
    }

    render(){
        const slider = slides.map(item =><Slide item={item} handleSlide={this.handleSlide}/>)
        return(
            <div ref={this.glider} className="h-full bg-blue-500 flex items-center justify-center" style={{height:"calc(100vh - 95.99px)", width: "300vw"}}>
                {slider}
            </div>
        )
    }
}