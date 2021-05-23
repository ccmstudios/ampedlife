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
        <ServicesNav />
        <Servicecard/>
        {/* <Row id="servicerows">
          <Col sm={8}>
            <div id="servicesection">
              <div id="servicesubsection">
                <div id="servicetitle">
                  <h1 id="birthplanning">Birth Planning Only - $120</h1>
                  <br></br>
                  <br></br>
                  <h6 small class="text-muted">
                    In person or Virtual assistance available for this services
                  </h6>
                  <img src={Pregnant} alt="pregnant woman" />
                  <br></br>
                  <br></br>

                  <a href="www.instagram.com">
                    <h2>Expand for more details</h2>
                  </a>
                </div>
                <div id="servicedescription">
                  <h4>
                    This services is for clients who would like to prepare a
                    plan for their birth and postpartum journey but may not
                    require the in-person support. I will discuss the process
                    and the options with you to help meet your needs during
                    labor and birth.
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div id="servicebuttonbox">
              <div>
              <div id='servicebutton' >
                <h2>
                  <a href="#">Let's Chat</a>
                </h2>
              </div>

              </div>
            </div>
          </Col>
        </Row>
        <Row id="servicerows">
          <Col sm={8}>
            <div id="servicesection">
              <div id="servicesubsection">
                <div id="servicetitle">
                  <h1 id='birthdoula'>Birth Doula Support $120</h1>
                  <br></br>
                  <br></br>
                  <h6 small class="text-muted">
                    In person or Virtual assistance available for this services
                  </h6>
                  <img src={Pregnant} alt="pregnant woman" />
                  <br></br>
                  <br></br>

                  <a href="www.instagram.com">
                    <h2>Expand for more details</h2>
                  </a>
                </div>
                <div id="servicedescription">
                  <h4>
                    This services is for clients who would like to prepare a
                    plan for their birth and postpartum journey but may not
                    require the in-person support. I will discuss the process
                    and the options with you to help meet your needs during
                    labor and birth.
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div id="servicebuttonbox">
              <div>
              <div id='servicebutton' >
                <h2>
                  <a href="#">Let's Chat</a>
                </h2>
              </div>

              </div>
            </div>
          </Col>
        </Row>
        <Row id="servicerows">
          <Col sm={8}>
            <div id="servicesection">
              <div id="servicesubsection">
                <div id="servicetitle">
                  <h1 id='birthafterloss'>Birth After Loss Support $120</h1>
                  <br></br>
                  <br></br>
                  <h6 small class="text-muted">
                    In person or Virtual assistance available for this services
                  </h6>
                  <img src={Pregnant} alt="pregnant woman" />
                  <br></br>
                  <br></br>

                  <a href="www.instagram.com">
                    <h2>Expand for more details</h2>
                  </a>
                </div>
                <div id="servicedescription">
                  <h4>
                    This services is for clients who would like to prepare a
                    plan for their birth and postpartum journey but may not
                    require the in-person support. I will discuss the process
                    and the options with you to help meet your needs during
                    labor and birth.
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div id="servicebuttonbox">
              <div>
              <div id='servicebutton' >
                <h2>
                  <a href="#">Let's Chat</a>
                </h2>
              </div>

              </div>
            </div>
          </Col>
        </Row>
        <Row id="servicerows">
          <Col sm={8}>
            <div id="servicesection">
              <div id="servicesubsection">
                <div id="servicetitle">
                  <h1 id='postpartum'>Postpartum Doula Support $120</h1>
                  <br></br>
                  <br></br>
                  <h6 small class="text-muted">
                    In person or Virtual assistance available for this services
                  </h6>
                  <img src={Pregnant} alt="pregnant woman" />
                  <br></br>
                  <br></br>

                  <a href="www.instagram.com">
                    <h2>Expand for more details</h2>
                  </a>
                </div>
                <div id="servicedescription">
                  <h4>
                    This services is for clients who would like to prepare a
                    plan for their birth and postpartum journey but may not
                    require the in-person support. I will discuss the process
                    and the options with you to help meet your needs during
                    labor and birth.
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div id="servicebuttonbox">
              <div>
              <div id='servicebutton' >
                <h2>
                  <a href="#">Let's Chat</a>
                </h2>
              </div>

              </div>
            </div>
          </Col>
        </Row>
        <Row id="servicerows">
          <Col sm={8}>
            <div id="servicesection">
              <div id="servicesubsection">
                <div id="servicetitle">
                  <h1 id='bereavement'>Bereavement Doula Support $120</h1>
                  <br></br>
                  <br></br>
                  <h6 small class="text-muted">
                    In person or Virtual assistance available for this services
                  </h6>
                  <img src={Pregnant} alt="pregnant woman" />
                  <br></br>
                  <br></br>

                  <a href="www.instagram.com">
                    <h2>Expand for more details</h2>
                  </a>
                </div>
                <div id="servicedescription">
                  <h4>
                    This services is for clients who would like to prepare a
                    plan for their birth and postpartum journey but may not
                    require the in-person support. I will discuss the process
                    and the options with you to help meet your needs during
                    labor and birth.
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div id="servicebuttonbox">
              <div>
              <div id='servicebutton' >
                <h2>
                  <a href="#">Let's Chat</a>
                </h2>
              </div>

              </div>
            </div>
          </Col>
        </Row>
        <Row id="servicerows">
          <Col sm={8}>
            <div id="servicesection">
              <div id="servicesubsection">
                <div id="servicetitle">
                  <h1 id='virtual'>Virtual Doula Support $120</h1>
                  <br></br>
                  <br></br>
                  <h6 small class="text-muted">
                    In person or Virtual assistance available for this services
                  </h6>
                  <img src={Pregnant} alt="pregnant woman" />
                  <br></br>
                  <br></br>

                  <a href="www.instagram.com">
                    <h2>Expand for more details</h2>
                  </a>
                </div>
                <div id="servicedescription">
                  <h4>
                    This services is for clients who would like to prepare a
                    plan for their birth and postpartum journey but may not
                    require the in-person support. I will discuss the process
                    and the options with you to help meet your needs during
                    labor and birth.
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div id="servicebuttonbox">
              <div>
              <div id='servicebutton' >
                <h2>
                  <a href="#">Let's Chat</a>
                </h2>
              </div>

              </div>
            </div>
          </Col>
        </Row> */}
        <hr></hr>
        {/* <div id="servicelist">
          <h3>In Person Services</h3>
          <ul>
            <li>Birth and Labor Doula $900</li>
            <li>Birth Planning Only $100</li>
            <li>Postpartum services $25 per hour</li>
            <li>Birth after loss services $900</li>
            <li>Service E</li>
          </ul>
          <h3>Virtual Services</h3>
          <h4>Virtual Birth Support Option 1 $400</h4>
          <ul>
            <li>Two Prenatal Appointments</li>
            <li>Customized Birth Plan</li>
            <li>Labor Support</li>
            <li>24/7 Phone/Text/Email Support until 6 weeks Postpartum</li>
            <li>On-Call Service beginning from 38 weeks until Delivery</li>
            <li>Two Post partum visits</li>
            <li>Early breastfeeding support(if desired)</li>
            <li>Postpartum Self-Care basket</li>
          </ul>
          <h4>Virtual Birth Support Option 2 $300</h4>
          <ul>
            <li>Two Prenatal Appointments</li>
            <li>Customized birth plan</li>
            <li>24/7 Phone/Text/Email Support until 6 weeks Postpartum</li>
            <li>On-Call Service beginning from 38 weeks until Delivery</li>
            <li>Two Post partum visits</li>
            <li>Early breastfeeding support(if desired)</li>
            <li>Postpartum Self-Care basket</li>
          </ul>
          <h3>Other Services</h3>
          <p >
            Birth Planning Only $120 This service is for the individual who does
            not require in person support, but would like prepare a plan for
            their birth and postpartum Service Includes Assist with creating
            birth preferences (plan) for the birth and postpartum Birth and
            Labor Doula $900 Postpartum services $25 per hour Birth after loss
            services Bereavement services (Complimentary Service) Support
            preparing you for what you can expect as you birth your baby through
            stillbirth, elective termination and miscarriage. Assistance with
            creating keepsake items for you baby will be provided when possible.
            Service includes: Attend birth Physical and Emotional support Follow
            up support, via email, text, and video chat Assistance in creating
            keepsakes for your baby Provide individualised resources to support
            you on your journey Virtual services Support focusing
          </p>
  
        </div> */}
      </div>
    );
  }
}

export default Services;
