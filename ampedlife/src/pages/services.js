import React from "react";
import Pregnant from "../assets/images/pregnant.jpg";

class Services extends React.Component {
  render() {
    return (
      <div id="services">
        <h1>This Is Services</h1>
        <h2>Let's get started</h2>
        <img src={Pregnant} alt="any day now" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          ultricies nibh augue, sit amet semper nulla consequat eget. Aenean vel
          dignissim ligula, vitae viverra metus. Quisque quis turpis lectus.
          Quisque lacinia, risus posuere lobortis scelerisque, turpis erat
          rhoncus mauris, at consectetur turpis nibh ac mi. Ut maximus tellus
          turpis, eget elementum metus accumsan sed. Duis non tellus semper,
          viverra massa nec, ullamcorper augue. Duis a magna arcu. Vestibulum
          scelerisque nibh sit amet elit interdum dignissim. Nulla consectetur
          quam vitae ipsum tempus tincidunt. In aliquet sodales ex non vehicula.
          Nullam vitae euismod sem. Maecenas dapibus metus et convallis auctor.
          Curabitur aliquam luctus massa, eget interdum ex placerat at. Nam
          faucibus molestie ullamcorper.
        </p>
        <hr></hr>
        <div id ='servicelist'>
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
          <p>
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
        </div>
      </div>
    );
  }
}

export default Services;
