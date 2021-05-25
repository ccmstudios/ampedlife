import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Babysmile from "../assets/images/babysmile.jpg";
import Sleepy from "../assets/images/sleepy.jpg";
import Couple from "../assets/images/couple.jpg";


class Contact extends React.Component {
  render() {
    return (
      <div>
        <h4 id ='contactwelcome'>
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
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="input" placeholder="First Name" />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="input" placeholder="Last Name" />
              </Form.Group>
            </div>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="inline">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="(123)456-7890" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group inline controlId="formGridAddress1">
              <Form.Label inline>Due Date</Form.Label>
              <Form.Control type='date' placeholder="MM/DD/YYYY" />

          
              </Form.Group>
            </Form.Row>
            <br></br>
            <p>What service(s) interest you?</p>
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
