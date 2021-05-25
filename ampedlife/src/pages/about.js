import React from "react";
import Amexia from "../assets/images/amexia.jpg";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div id="aboutmain">
          <img src={Amexia} alt="Amexia Porterfield" />
          <div id="abouttext">
            <h1>Meet Your Doula</h1>
            <p>
              I am Amexia Porterfield and I am a married mother of 3 amazing
              children and 1 angel baby. I decided to become a doula because of
              my childbirth experiences and the difficult birth experiences of those I
              care about. I have experienced early miscarriages, an ectopic
              pregnancy, and 2 preterm births that resulted in one child having
              a NICU stay and a child that passed away in the second trimester.
              <br></br>
              <br></br>I had no one to really guide me through the traumas of my
              high-risk pregnancies and my pregnancy losses. I found it hard to
              navigate grieving my losses while recovering from birth. As I
              learned more about what doulas have to offer, I felt a calling to
              help individuals like myself on their journey bringing new life
              into the world.
              <br></br>
              <br></br>
              No two pregnancies are the same, even for a person who has had
              multiple children. As your doula, I will use my skills to help
              create a peaceful environment for you. I want you hold space for
              you where you feel heard, informed and supported. It would be my
              honor to support your birthing needs.
              <br></br>
              <br></br>
              
              <strong>
                My mission is to provide the best pregnancy, postpartum, and
                bereavement support to families virtually, in Charlotte and the
                surrounding areas. I will Support, educate, & empower
                individuals one birth at a time.
              </strong>
            </p>
            <div id="chat">
              <Link to="/contact">
                <a href="/contact">
                  <h1>Let's Chat!</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
