import React from 'react'
import Card from './main/Card'
import vehiculos from '../assets/vehiculos'


export default class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const cards = vehiculos.map(vehiculo =><Card vehiculo={vehiculo}/>)
        console.log("%cesto es cards", "font-size:25", cards)
        return(
            <div className="w-full h-full bg-red-200 flex flex-row flex-wrap">
                {cards}
            </div>
        )
    }
}