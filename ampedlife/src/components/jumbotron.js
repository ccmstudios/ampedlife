import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Jumboimage1 from '../assets/images/jumboimage1.jpg'
import Jumboimage2 from '../assets/images/jumboimage2.jpg'
import Jumboimage3 from '../assets/images/jumboimage3.jpg'

class Jumbotron extends React.Component{
    render(){
        return(
            <div>
                <Carousel id='carousel'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jumboimage1}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jumboimage2}
      alt="Second slide"
    />

 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jumboimage3}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}

export default Jumbotron;