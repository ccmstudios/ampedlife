import React from "react";
import emailjs from "emailjs-com";
import Babysmile from "../assets/images/babysmile.jpg";
import Sleepy from "../assets/images/sleepy.jpg";
import Couple from "../assets/images/couple.jpg";
import Form from "react-bootstrap/Form";


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
          <Form.Label>First Name</Form.Label>
          <Form.Control type="name" name="user_name" placeholder="first_name" />
          <label>First Name</label>
          <input type="text" name="first_name" />
          <br></br>
          <label>Last Name</label>
          <input type="text" name="last_name" />
          <br></br>
          <label>Email</label>
          <input type="email" name="user_email" />
          <br></br>
          <label>Phone Number</label>
          <input type="number" name="phone_number" />
          <br></br>

          <label>Due Date</label>
          <input type="date" name="due_date" />
          <br></br>

          <p>What service(s) interest you?</p>
          <h4> Check all that apply!</h4>
          <label>Birth Planning Only</label>
          <input type="checkbox" name="birth_planning" />
          <br></br>

          <label>Full Birth Support</label>
          <input type="checkbox" name="full_birth" />
          <br></br>

          <label>Pregnancy After Loss</label>
          <input type="checkbox" name="pregnancy_after_loss" />
          <br></br>

          <label>Postpartum</label>
          <input type="checkbox" name="postpartum" />
          <br></br>

          <label>Bereavement</label>
          <input type="checkbox" name="bereavement" />
          <br></br>

          <label>Virtual Services</label>
          <input type="checkbox" name="virtual_services" />
          <br></br>

          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
