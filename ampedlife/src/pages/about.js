import React from "react";
import Amexia from "../assets/images/amexia.jpg";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <h1>Meet Your Doula</h1>
        <h2>It's baby time</h2>
        <div id="aboutmain">
          <p>
            I am Amexia Porterfield and I am a married mother of 3 amazing
            children and 1 angel baby. I decided to become a doula because of my
            childbirth experiences and the difficult experiences of those I care
            about. I have experienced 2 preterm births that resulted in one
            child having a NICU stay and a child that passed away in the second
            trimester. I had no one to really guide me through the traumas of my
            high risks pregnancies and my pregnancy losses. I found it hard to
            navigate the while recovering from births and navigating loss. As I
            learned more about what doulas had to offer, I felt a calling to
            help individuals like myself on their journeys bring new life into
            the world.
          </p>
          <img src={Amexia} alt="Amexia Porterfield" />
          <h4>
            My mission is to provide the best pregnancy, postpartum, and
            bereavement support to families virtually, in Charlotte and the
            surrounding areas. I will Support, educate, & empower individuals
            one birth at a time.
          </h4>
        </div>
        <a href="www.instagram.com">Schedule today!</a>
      </div>
    );
  }
}

export default About;
