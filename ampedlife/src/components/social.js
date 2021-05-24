import React from 'react'
import Twitter from '../assets/images/twitter.png'
import Facebook from '../assets/images/facebook.png'
import Pinterest from '../assets/images/pintrest.png'
import Instagram from '../assets/images/instagram.png'
import LinkedIn from '../assets/images/linkedin.png'

class Social extends React.Component{
    render(){
        return(
            <div id ='social'>
                <ul>
                    <li><img src ={Facebook} alt =''/><a href=''><h3>Facebook</h3></a></li>
                    <li><img src ={Instagram} alt =''/><a href=''><h3>Instagram</h3></a></li>
                    <li><img src ={Twitter} alt =''/><a href=''><h3>Twitter</h3></a></li>
                    <li><img src ={Pinterest} alt =''/><a href=''><h3>Pinterest</h3></a></li>
                    <li><img src ={LinkedIn} alt =''/><a href=''><h3>LinkedIn</h3></a></li>
                
                </ul>
            </div>
        )
    }
}

export default Social