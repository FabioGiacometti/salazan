import React from 'react'
import HeaderLink from './HeaderLink'
import items from '../../assets/navigationItems'

export default class Burger extends React.Component{
  
    render(){
        const navigationMenu = items.map(item =><HeaderLink icon={item.icon} title={item.title} key={item.title}/>)
        return(
            <div className="bg-red-500 hidden sm:flex md:hidden flex-col h-full w-auto items-center justify-around ">
                <div className="flex flex-row justify-between h-1/2 items-center mr-2">
                	{navigationMenu}
                </div>
            </div>
        )
    }
}