import React from 'react'
import AsideFilter from './aside/AsideFilter'
import asideItems from '../assets/asideItems'

class Aside extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const asidefilters = asideItems.map(filtro => <AsideFilter filtro={filtro}/>)
        return(
            <div className="w-64 pr-4 h-full hidden md:block">
            <div className="w-full h-full pl-4 pt-4 flex flex-col justify-evenly ">
                {asidefilters} 
                {/* <AsideFilter asideItems={asideItems}/> */}
            </div>
            </div>  
        )
    }
}

export default Aside