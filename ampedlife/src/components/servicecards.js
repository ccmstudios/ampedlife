import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabContainer from "react-bootstrap/TabContainer";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Pregnant from "../assets/images/pregnant.jpg";
import DropdownButton from 'react-bootstrap/DropdownButton'

class Servicecard extends React.Component {
  render() {
    return (
      <div id="servicescontainer">
        <TabContainer>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            
          >
            <Tab
              id="servicetabs"
              eventKey="birthplan"
              title="Birthing Plan Only"
            >
              <h1>Birth Planning Only - $120</h1>
              <br></br>
              <img src={Pregnant} alt="woman with belly" />
              <br></br>
              <br></br>
              <p>
                This services is for clients who would like to prepare a plan
                for their birth and postpartum journey but may not require the
                in-person support. I will discuss the process and the options
                with you to help meet your needs during labor and birth.{" "}
              </p>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  Click to see more…
                </Dropdown.Toggle>
                <Dropdown.Menu drop = 'down' id="dropdowndiv">
                  <Dropdown.Item id="dropdowndiv">
                    <h3>Service Includes</h3>
                    <ul>
                      <li>
                        Assisting you with creating a list of birth preferences
                        (plan) for your birth.
                      </li>
                      <li>
                        Reviewing possible birthing positions and comfort
                        measures that can be utilized during labor.{" "}
                      </li>
                    </ul>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* bootsrap dropdown */}
              <DropdownButton
                id="dropdown-basic-button"
                title="Dropdown button"
                drop = 'down'
              >
                <Dropdown.Item href="#/action-1">
                  <div id="dropdowndiv">
                    This services is for clients who would like to prepare a
                    plan for their birth and postpartum journey but may not
                    require the in-person support. I will discuss the process
                    and the options with you to help meet your needs during
                    labor and birth.
                  </div>
                </Dropdown.Item>
              </DropdownButton>
              {/* end */};
            </Tab>
            <Tab eventKey="birthdoula" title="Birthing Doula">
              <h1>Birthing Doula - $1100</h1>
              <br></br>
              <img src={Pregnant} alt="knocked up" />
              <br></br>
              <br></br>
              <p>
                As your doula, I guide you through your pregnancy journey. I
                guide you through labor and immediately postpartum. I support
                you and your partner using breathing techniques, labor
                positions, and other comfort measures.{" "}
              </p>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  Click to see more…
                </Dropdown.Toggle>
                <Dropdown.Menu id="dropdowndiv">
                  <Dropdown.Item>
                    <div>
                      <p id="dropdowndivp">
                        As your doula, I guide you through your pregnancy
                        journey. I guide you through labor and immediately
                        postpartum. I support you and your partner using
                        breathing techniques, labor positions, and other comfort
                        measures.{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Tab>
            <Tab eventKey="afterLoss" title="Pregnancy After Loss">
              <h1>Pregnancy After Loss - $1100</h1>
              Navigating pregnancy after loss can be difficult physically and
              emotionally. I walk alongside you through the journey and provide
              the emotional and physical support guiding you through your
              pregnancy. My goal is to help make the experience as positive as
              possible.{" "}
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  Click to see more…
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Hello there!</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Tab>
            <Tab eventKey="postpartum" title="Postpartum">
              <h1> Postpartum - Starting at $25 an Hour </h1>
              There are always adjustments required when bringing a new baby
              home. With me as your postpartum doula, I assist your family unit
              as you transition into your life with a newborn. Your focus and
              energy can then be placed more on your recovery and care for your
              newborn.{" "}
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  Click to see more…
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Hello there!</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Tab>
            <Tab eventKey="bereavement" title="Bereavement">
              <h1>Bereavement - Complimentary Service</h1>
              Holding space is a term that means focusing on someone as they are
              feeling their emotions. I create a safe space to allow expression
              of emotions without judgement. As your doula, I will support
              preparing you for what you can expect as you birth your baby
              through stillbirth, elective termination and miscarriage.{" "}
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  Click to see more…
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Hello there!</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Tab>
            <Tab eventKey="virtual" title="Virtual Doula">
              <h1>Virtual Services - $500</h1>
              <br></br>
              <img src={Pregnant} alt="coming baby" />
              <br></br>
              <br></br>
              <p>
                You may be restricted on room or you want a more intimate
                setting with just you and your birthing partner. Virtual support
                allows me to support your birth no matter your location. I can
                use my tools and knowledge to help you prepare for your birth
                and help your partner support your needs.{" "}
              </p>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  Click to see more…
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Hello there!</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Tab>
          </Tabs>
        </TabContainer>
      </div>
    );
  }
}
export default Servicecard;
