import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabContainer from "react-bootstrap/TabContainer";
import Pregnant from "../assets/images/pregnant.jpg";
import Rainbow from "../assets/images/rainbow.jpg";

class Servicecard extends React.Component {
  render() {
    return (
      <div id="servicescontainer">
        <TabContainer id='tabs'>
          <Tabs
            id="tabs"
            defaultActiveKey="birthplan"
            transition={false}
            style = {{justifyContent: 'space-evenly'}}
          >
            <Tab
              id="servicetabs"
              eventKey="birthplan"
              title="Birthing Plan Only"
            
            >
              <br></br>
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
              <h3>Service Includes</h3>
              <ul>
                <li>
                  Assisting you with creating a list of birth preferences (plan)
                  for your birth.
                </li>
                <li>
                  Reviewing possible birthing positions and comfort measures
                  that can be utilized during labor.{" "}
                </li>
              </ul>
              <div id="booking">
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank" rel="noreferrer"
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fcalendly.com%2Fampedlifedoulaservices%2F30min%3Ffbclid%3DIwAR3QciVOAp_YKsVro2lt2YAcQdya-zlu0eZlI3clIsIKFzocWAMUIgxDGes&h=AT1K337f5DERrE5T97XIZrrP-kIYAo2LdH8ytxTpy-DKrrRmCJtyvu_9WYAuDFrmPLEHGE5KvVRjylvGiGDUrphN8TPibRKzaw9_mO2uJD9WcGBtxfl-YkygtjkAmI21jUTRPcvis-28-45L9oIERw"
                >
                  <h1>Schedule Your Consultation Today!</h1>
                </a>
              </div>
            </Tab>
            <Tab id="servicetabs" eventKey="birthdoula" title="Birthing Doula">
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
              <h3>Service Includes</h3>
              <ul>
                <li>
                  4 prenatal visits to prepare your birth goals as well as
                  reviewing possible comfort measures to use during labor.
                </li>
                <li>
                  Access to my lending library containing information about
                  pregnancy, baby care and lactation information.
                </li>
                <li>
                  Unlimited phone and email support to answer pregnancy
                  questions and offer support up to 6 weeks postpartum.
                </li>
                <li>
                  Postpartum follow up visit to review your birth experience,
                  offer resources for postpartum care.
                </li>
              </ul>
              <div id="booking">
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank" rel="noreferrer"
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fcalendly.com%2Fampedlifedoulaservices%2F30min%3Ffbclid%3DIwAR3QciVOAp_YKsVro2lt2YAcQdya-zlu0eZlI3clIsIKFzocWAMUIgxDGes&h=AT1K337f5DERrE5T97XIZrrP-kIYAo2LdH8ytxTpy-DKrrRmCJtyvu_9WYAuDFrmPLEHGE5KvVRjylvGiGDUrphN8TPibRKzaw9_mO2uJD9WcGBtxfl-YkygtjkAmI21jUTRPcvis-28-45L9oIERw"
                >
                  <h1>Schedule Your Consultation Today!</h1>
                </a>
              </div>
            </Tab>
            <Tab eventKey="afterLoss" title="Pregnancy After Loss">
              <h1>Pregnancy After Loss - $1100</h1>
              <br></br>
              <img src={Rainbow} alt="rainbow tutu" />
              <br></br>
              <br></br>
              Navigating pregnancy after loss can be difficult physically and
              emotionally. I walk alongside you through the journey and provide
              the emotional and physical support guiding you through your
              pregnancy. My goal is to help make the experience as positive as
              possible. <h3>Service Includes</h3>
              <ul>
                <li>
                  4 prenatal visits to prepare your birth goals as well as
                  reviewing possible comfort measures to use during labor.
                </li>
                <li>
                  Biweekly calls discussing your physical and emotional
                  well-being.
                </li>
                <li>Continuous emotional and physical support.</li>
                <li>
                  Access to my lending library containing information about
                  pregnancy, baby care and lactation information.
                </li>
                <li>On-Call service beginning from 38 weeks until delivery.</li>
                <li>
                  Unlimited phone and email support to answer pregnancy
                  questions and offer support up to 6 weeks postpartum.
                </li>
                <li>
                  Postpartum follow up visit to review your birth experience,
                  offer resources for postpartum care.
                </li>
                <li>
                  Postpartum follow up visit to see how you are adjusting and
                  offer early breastfeeding support if desired.
                </li>
                <li>
                  Postpartum Self-Care Basket filled with goodies that aid in
                  your recovery and promotes positive energy.
                </li>
              </ul>
              <div id="booking">
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank" rel="noreferrer"
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fcalendly.com%2Fampedlifedoulaservices%2F30min%3Ffbclid%3DIwAR3QciVOAp_YKsVro2lt2YAcQdya-zlu0eZlI3clIsIKFzocWAMUIgxDGes&h=AT1K337f5DERrE5T97XIZrrP-kIYAo2LdH8ytxTpy-DKrrRmCJtyvu_9WYAuDFrmPLEHGE5KvVRjylvGiGDUrphN8TPibRKzaw9_mO2uJD9WcGBtxfl-YkygtjkAmI21jUTRPcvis-28-45L9oIERw"
                >
                  <h1>Schedule Your Consultation Today!</h1>
                </a>
              </div>
            </Tab>
            <Tab eventKey="postpartum" title="Postpartum">
              <h1> Postpartum - Starting at $25 an Hour </h1>
              <br></br>
              <img src={Pregnant} alt="knocked up" />
              <br></br>
              <br></br>
              There are always adjustments required when bringing a new baby
              home. With me as your postpartum doula, I assist your family unit
              as you transition into your life with a newborn. Your focus and
              energy can then be placed more on your recovery and care for your
              newborn. <h3>Service Includes</h3>
              <ul>
                <li>
                  Light cleaning and organizing to help keep clutter at a
                  minimum.
                </li>
                <li>Light meal preparation.</li>
                <li>
                  Caring for you newborn allowing you to be hands free to take
                  care of personal needs.
                </li>
                <li>
                  Assisting with breast- and bottle-feeding support of the
                  newborn.
                </li>
              </ul>
              <div id="booking">
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank" rel="noreferrer"
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fcalendly.com%2Fampedlifedoulaservices%2F30min%3Ffbclid%3DIwAR3QciVOAp_YKsVro2lt2YAcQdya-zlu0eZlI3clIsIKFzocWAMUIgxDGes&h=AT1K337f5DERrE5T97XIZrrP-kIYAo2LdH8ytxTpy-DKrrRmCJtyvu_9WYAuDFrmPLEHGE5KvVRjylvGiGDUrphN8TPibRKzaw9_mO2uJD9WcGBtxfl-YkygtjkAmI21jUTRPcvis-28-45L9oIERw"
                >
                  <h1>Schedule Your Consultation Today!</h1>
                </a>
              </div>
            </Tab>
            <Tab eventKey="bereavement" title="Bereavement">
              <h1>Bereavement - Complimentary Service</h1>
              <br></br>
              <img src={Pregnant} alt="knocked up" />
              <br></br>
              <br></br>
              Holding space is a term that means focusing on someone as they are
              feeling their emotions. I create a safe space to allow expression
              of emotions without judgement. As your doula, I will support
              preparing you for what you can expect as you birth your baby
              through stillbirth, elective termination and miscarriage.{" "}
              <h3>Service Includes</h3>
              <ul>
                <li>Attending the birth.</li>
                <li>Physical and Emotional support</li>
                <li>Follow up support, via email, text, and video chat</li>
                <li>Assistance in creating keepsakes for your baby.</li>
                <li>
                  Provide individualized resources to support you on your
                  journey.
                </li>
              </ul>
              <div id="booking">
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank" rel="noreferrer"
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fcalendly.com%2Fampedlifedoulaservices%2F30min%3Ffbclid%3DIwAR3QciVOAp_YKsVro2lt2YAcQdya-zlu0eZlI3clIsIKFzocWAMUIgxDGes&h=AT1K337f5DERrE5T97XIZrrP-kIYAo2LdH8ytxTpy-DKrrRmCJtyvu_9WYAuDFrmPLEHGE5KvVRjylvGiGDUrphN8TPibRKzaw9_mO2uJD9WcGBtxfl-YkygtjkAmI21jUTRPcvis-28-45L9oIERw"
                >
                  <h1>Schedule Your Consultation Today!</h1>
                </a>
              </div>
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
                use my tools and kTodayledge to help you prepare for your birth
                and help your partner support your needs.{" "}
              </p>
              <h3>Service Includes</h3>
              <ul>
                <li>
                  4 prenatal visits to prepare your birth goals as well as
                  reviewing possible comfort measures to use during labor.
                </li>
                <li>
                  Access to my lending library containing information about
                  pregnancy, baby care and lactation information.
                </li>
                <li>
                  Unlimited phone and email support to answer pregnancy
                  questions and offer support up to 6 weeks postpartum.
                </li>
                <li>
                  Postpartum follow up visit to review your birth experience,
                  offer resources for postpartum care.
                </li>
                <li>
                  Postpartum follow up visit to see how you are adjusting after
                  birth and offer early breastfeeding support if desired.
                </li>
                <li>
                  On-Call service beginning from 38 weeks until delivery.{" "}
                </li>
                <li>
                  Postpartum Self-Care Basket filled with goodies that aids in
                  your recovery and promotes positive energy.
                </li>
              </ul>
              <div id="booking">
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank" rel="noreferrer"
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fcalendly.com%2Fampedlifedoulaservices%2F30min%3Ffbclid%3DIwAR3QciVOAp_YKsVro2lt2YAcQdya-zlu0eZlI3clIsIKFzocWAMUIgxDGes&h=AT1K337f5DERrE5T97XIZrrP-kIYAo2LdH8ytxTpy-DKrrRmCJtyvu_9WYAuDFrmPLEHGE5KvVRjylvGiGDUrphN8TPibRKzaw9_mO2uJD9WcGBtxfl-YkygtjkAmI21jUTRPcvis-28-45L9oIERw"
                >
                  <h1>Schedule Your Consultation Today!</h1>
                </a>
              </div>
            </Tab>
          </Tabs>
        </TabContainer>
      </div>
    );
  }
}
export default Servicecard;
