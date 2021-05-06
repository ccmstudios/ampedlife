import React from "react";
import Pregnant from '../assets/images/pregnant.jpg'

class Services extends React.Component {
  render() {
    return (
      <div id ='services'>
        <h1>This Is Services</h1>
        <h2>Let's get started</h2>
        <img src={Pregnant} alt="any day now" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          ultricies nibh augue, sit amet semper nulla consequat eget. Aenean vel
          dignissim ligula, vitae viverra metus. Quisque quis turpis lectus.
          Quisque lacinia, risus posuere lobortis scelerisque, turpis erat
          rhoncus mauris, at consectetur turpis nibh ac mi. Ut maximus tellus
          turpis, eget elementum metus accumsan sed. Duis non tellus semper,
          viverra massa nec, ullamcorper augue. Duis a magna arcu. Vestibulum
          scelerisque nibh sit amet elit interdum dignissim. Nulla consectetur
          quam vitae ipsum tempus tincidunt. In aliquet sodales ex non vehicula.
          Nullam vitae euismod sem. Maecenas dapibus metus et convallis auctor.
          Curabitur aliquam luctus massa, eget interdum ex placerat at. Nam
          faucibus molestie ullamcorper.
        </p>
        <hr></hr>
        <div>
            <h3>Services</h3>
            <ul>
                <li>Service A</li>
                <li>Service B</li>
                <li>Service C</li>
                <li>Service D</li>
                <li>Service E</li>
          
            </ul>
        </div>
      </div>
    );
  }
}

export default Services;
