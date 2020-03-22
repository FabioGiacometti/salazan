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
            <div className="w-64 h-full  px-4 pt-4">
                {asidefilters} 
                {/* <AsideFilter asideItems={asideItems}/> */}
            </div>
        )
    }
}

export default Aside