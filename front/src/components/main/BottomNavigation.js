import React from 'react'
import HeaderLink from '../header/HeaderLink'
import items from '../../assets/navigationItems'

export default class BottomNavigation extends React.Component{
  
    render(){
        const navigationMenu = items.map(item =><HeaderLink icon={item.icon} title={item.title} key={item.title}/>)
        return(
            <div className="md:hidden inset-x-0 bottom-0 flex-row h-full w-auto items-center justify-around"
            style={{position:"fixed", bottom: "0", height: "55px", background: "#001F31" }}>
                <div className="flex flex-row justify-between h-1/2 items-center mx-2 navigate">
                	{navigationMenu} 
                </div>
            </div>
        )
    }
}