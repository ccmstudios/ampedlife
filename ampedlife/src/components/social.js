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
                    <li><img src ={Facebook} alt ='facebook'/><a href='https://www.facebook.com/ampedlifedoula/' target='_blank' rel="noreferrer"><h3>Facebook</h3></a></li>
                    <li><img src ={Instagram} alt ='insta'/><a href='https://www.instagram.com/ampedlifedoula/' target='_blank' rel="noreferrer"><h3>Instagram</h3></a></li>
                    <li><img src ={Twitter} alt ='twitter'/><a href='https://twitter.com/AmpedLifeDoula' target='_blank' rel="noreferrer"><h3>Twitter</h3></a></li>
                    <li><img src ={Pinterest} alt ='pinterest'/><a href='https://www.pinterest.com/AMPedLifeDoula/?eq=amped%20life%20d&etslf=4684' target='_blank' rel="noreferrer"/><a href=''><h3>Pinterest</h3></a></li>
                
                </ul>
            </div>
        )
    }
}

export default Social