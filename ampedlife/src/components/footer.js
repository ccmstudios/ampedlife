import React from "react";
import Logo from "../assets/images/logo.png";
import Social from "./social";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <br></br>
        <br></br>
        <h3>Areas Served</h3>
        <h4>
          Servicing the Charlotte Metro Area, Concord, Gastonia, Monroe, Rock
          Hill, Ballantyne, University, Uptown, Matthews, NODA, Statesville,
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
        <br></br>
        <Social />
        <img src={Logo} alt="footer amped life" />
        <h4 className="text-muted">
          Website designed by RZN8 Publishing and CCM Studios LLC
        </h4>
      </div>
    );
  }
}

export default Footer;
