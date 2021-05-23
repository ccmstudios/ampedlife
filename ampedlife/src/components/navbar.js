import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png'




class Navbar extends React.Component{
    render(){
        return(

            <div>
<nav>
                 <ul id='navbar'>
                     <Link to= '/'>
                <p><li>Home<li/>
                     </li></p></Link>
            <Link to='/about'>
                <p><li>About</li></p>
            </Link>
            <Link to='/services'>
                <p><li>Services</li></p>
            </Link>
<Link to='/'>

            <img style ={{zindex:'999'}} src ={Logo} alt ='amped life logo'className ='logo-transparent'/>
</Link>
            <Link to='/blog'>
                <p><li>Blog</li></p>
            </Link>
            <Link to='/clientportal'>
                <p><li>Client Portal</li></p>
            </Link>
            <Link to='/contact'>
                <p><li>Contact</li></p>
            </Link>

            </ul>
            </nav>
            </div>
        )
    }
}

export default Navbar;