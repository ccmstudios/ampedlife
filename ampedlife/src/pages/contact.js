import React from "react";
import emailjs from "emailjs-com";
import Babysmile from "../assets/images/babysmile.jpg";
import Sleepy from "../assets/images/sleepy.jpg";
import Couple from "../assets/images/couple.jpg";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rpx07ns",
        "ampedlifedoulaemail",
        e.target,
        "user_MUW1uLNHmDDdvMvRyMbNx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div id="contact">
      <h4 id="contactwelcome">
        Let's Discuss your family's goals and needs. I look forward to speaking
        with you!
      </h4>
      <div id="form">
        <div id="contactpics">
          <img id="babysmile" src={Babysmile} alt="baby smiling" />
          <img id="babysmile" src={Couple} alt="baby family" />
          <img id="babysmile" src={Sleepy} alt="baby sleep" />
        </div>
        <form className="contact-form" id="contactform" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <div class="form-row">
            <div id="mobilepics">
              <img id="babysmile" src={Babysmile} alt="baby smiling" />
              <img id="babysmile" src={Couple} alt="baby family" />
              <img id="babysmile" src={Sleepy} alt="baby sleep" />
            </div>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="name"
                name="first_name"
                placeholder="First_name"
              />
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="name"
                name="last_name"
                placeholder="Last Name"
              />
            </Form.Group>
          </div>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="inline">Email</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                name="phone_number"
                placeholder="(123)456-7890"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group inline controlId="formGridAddress1">
              <Form.Label inline>Due Date</Form.Label>
              <Form.Control
                type="date"
                name="due_date"
                placeholder="MM/DD/YYYY"
              />
            </Form.Group>
          </Form.Row>

          <p>What service(s) interest you?</p>
          <h4> Check all that apply!</h4>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              name="birth_planning"
              label="Birth Planning Only"
            />
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              name="full_birth"
              label="Full Birth Support"
            />
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              name="pregnancy_after_loss"
              label="Pregnancy After Loss"
            />
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              name="postpartum"
              label="Postpartum Support"
            />
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              name="bereavement"
              label="Bereavement"
            />
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              name="virtual_services"
              label="Virtual Services"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Additional Information(optional)</Form.Label>
            <Form.Control
              id="textbox"
              as="textarea"
              type="textarea"
              placeholder="Optional"
              name="message"
            />
          </Form.Group>

          <br></br>
          <Button type="submit" value="send" variant="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
