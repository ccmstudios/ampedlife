import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Babysmile from "../assets/images/babysmile.jpg";
import Sleepy from "../assets/images/sleepy.jpg";
import Couple from "../assets/images/couple.jpg";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h4>
          Let's Discuss your family's goals and needs. I look forward to
          speaking with you!
        </h4>
        <div id="form">
          <div id="contactpics">
            <img id="babysmile" src={Babysmile} alt="baby smiling" />
            <img id="babysmile" src={Couple} alt="baby family" />
            <img id="babysmile" src={Sleepy} alt="baby sleep" />
          </div>
          <Form id="contactform">
            <div class="form-row">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </Form.Group>
            </div>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="inline">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="input" placeholder="(123)456-7890" />
              </Form.Group>
            </Form.Row>

            <h4> Estimated due date</h4>

            <Form.Row>
            <Form.Group inline controlId="formGridAddress1">
              <Form.Label inline>Month</Form.Label>
              <Form.Control placeholder="MM" />
            {/* </Form.Group> */}

            {/* <Form.Group controlId="formGridAddress2"> */}
              <Form.Label>Day</Form.Label>
              <Form.Control placeholder="DD" />
            {/* </Form.Group> */}

              {/* <Form.Group as={Col} controlId="YYYY"> */}
                <Form.Label>Year</Form.Label>
                <Form.Control placeholder="YYYY" />
              </Form.Group>
            </Form.Row>
            <h4> Check all that apply!</h4>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Birth Planning Only" />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Full Birth Support" />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Pregnancy After Loss" />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="PostPartum" />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Bereavement" />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Virtual Birth Services" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Additional Information(optional)</Form.Label>
              <Form.Control
                id="textbox"
                as="textarea"
                type="textarea"
                placeholder="Optional"
              />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
