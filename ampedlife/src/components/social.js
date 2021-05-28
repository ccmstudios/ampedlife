import React from 'react'
import Twitter from '../assets/images/twitter.png'
import Facebook from '../assets/images/facebook.png'
import Pinterest from '../assets/images/pintrest.png'
import Instagram from '../assets/images/instagram.png'

class Social extends React.Component{
    render(){
        return(
            <div id ='social'>
                <ul>
                    <li><a href='https://www.facebook.com/ampedlifedoula/' target='_blank' rel="noreferrer"><img src ={Facebook} alt ='facebook'/><h3>Facebook</h3></a></li>
                    <li><a href='https://www.instagram.com/ampedlifedoula/' target='_blank' rel="noreferrer"><img src ={Instagram} alt ='insta'/><h3>Instagram</h3></a></li>
                    <li><a href='https://twitter.com/AmpedLifeDoula' target='_blank' rel="noreferrer"><img src ={Twitter} alt ='twitter'/><h3>Twitter</h3></a></li>
                    <li><a href='https://www.pinterest.com/AMPedLifeDoula/' target='_blank' rel="noreferrer"><img src ={Pinterest} alt ='pinterest'/><h3>Pinterest</h3></a></li>
                
                </ul>
            </div>
        )
    }
}

export default Social