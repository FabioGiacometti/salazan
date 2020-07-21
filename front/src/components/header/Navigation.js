import React from 'react'
import HeaderLink from './HeaderLink'
import items from '../../assets/navigationItems'

export default class Navigation extends React.Component{
  
    render(){
        const navigationMenu = items.map(item =><HeaderLink icon={item.icon} title={item.title} key={item.title} dir={item.dir}/>)
        return(
            <div className="hidden md:flex flex-row h-full w-auto items-center justify-around relative">
                <div className="flex flex-row justify-between h-1/2 items-center mr-2">
                	{navigationMenu}
                </div>
            </div>
        )
    }
}