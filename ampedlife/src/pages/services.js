import React from "react";
import Pregnant from "../assets/images/pregnant.jpg";
import ServicesNav from "../components/servicesnav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Servicecard from "../components/servicecards";

class Services extends React.Component {
  render() {
    return (
      <div id="services">
        <h1>Our Services</h1>
        {/* <ServicesNav /> */}
        <Servicecard/>

      </div>
    );
  }
}

export default Services;
