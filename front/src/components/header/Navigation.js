import React from 'react'
// import Searchbar from './Searchbar'
import HeaderLink from './HeaderLink'
import items from '../../assets/navigationItems'

export default class Navigation extends React.Component{
  
    render(){
        const navigationMenu = items.map(item =><HeaderLink icon={item.icon} title={item.title} key={item.title}/>)
        return(
            <div className="flex flex-col h-full justify-around" style={{minWidth: "700px"}}>
                {/* <Searchbar /> */}
                <div className="flex flex-row justify-between h-1/2 items-start">
                	{navigationMenu}
                </div>
            </div>
        )
    }
}