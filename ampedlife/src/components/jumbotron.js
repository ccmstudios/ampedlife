import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Jumboimage1 from '../assets/images/jumboimage1.jpg'
import Jumboimage2 from '../assets/images/jumboimage2.jpg'
import Jumboimage3 from '../assets/images/jumboimage3.jpg'
import Jumboimage4 from '../assets/images/Jumboimage4.jpg'
import Jumboimage5 from '../assets/images/jumboimage5.jpg'
import Jumboimage6 from '../assets/images/jumboimage6.jpg'
import Jumboimage7 from '../assets/images/jumboimage7.jpg'
import Jumboimage8 from '../assets/images/jumboimage8.jpg'

class Jumbotron extends React.Component{
    render(){
        return(
            <div>
                <Carousel id='carousel'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jumboimage6}
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
      src={Jumboimage5}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jumboimage4}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jumboimage3}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jumboimage1}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jumboimage7}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jumboimage8}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}

export default Jumbotron;