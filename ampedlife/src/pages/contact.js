import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Babysmile from "../assets/images/babysmile.jpg";
import Sleepy from "../assets/images/sleepy.jpg";
import Couple from "../assets/images/couple.jpg";
import emailjs from 'emailjs-com';


class Contact extends React.Component {
  render() {
    
    function SendEmail(e){
      e.preventDefault();
  
      emailjs.sendForm('service_rpx07ns', 'ampedlifedoulaemail', e.target, 'user_MUW1uLNHmDDdvMvRyMbNx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
      <div id='contact'>
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
                <Form.Control type="name" name="user_name" placeholder="First Name" />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" name="user_name" placeholder="Last Name" />
              </Form.Group>
            </div>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="inline">Email</Form.Label>
                <Form.Control type="email" name="user_email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" name="contact_number" placeholder="(123)456-7890" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group inline controlId="formGridAddress1">
              <Form.Label inline>Due Date</Form.Label>
              <Form.Control type='date' name ='DueDate' placeholder="MM/DD/YYYY" />

          
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
            <Button onSubmit ={SendEmail} variant="primary" type="submit">
              Submit
            </Button>
          
    <form className="contact-form" onSubmit={SendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>


          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
