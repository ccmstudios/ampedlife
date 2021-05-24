import React from "react";
import Logo from '../assets/images/logo.png'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        {/* social media goes here */}
        <br></br>
        <br></br>
        <h4>
          Servicing the Charlotte Metro Area, Concord, Gastonia, Monroe, Rock
          Hill, Ballentyne, University, Uptown, Matthews, NODA, Statesville,
          Plaza Midwood, Indian Trail, Pineville, Mint Hill
        </h4>
        <h3>Amped Life Doula Services, LLC</h3>
        <h3>
          <strong>Phone:</strong>
          (704) 443-8343

        </h3>
        <h3>
          <strong>Email:</strong>
          Amexia.porterfield@aldoulaservices.com

        </h3>
        <img src = {Logo} alt = 'footer amped life'/>
      </div>
    );
  }
}

export default Footer;
