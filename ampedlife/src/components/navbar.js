import React from 'react'
import Navigation from './navigation'
import MobileNav from './mobileNav'



class Navbar extends React.Component{
    render(){
        return(

            <div>
                <Navigation/>
                <MobileNav/>

            </div>
        )
    }
}

export default Navbar;