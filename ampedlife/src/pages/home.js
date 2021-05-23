import React from "react";
import Jumbotron from "../components/jumbotron";
import Babypic1 from "../assets/images/baby.jpg";
import InstagramEmbed from "react-instagram-embed";
import Lexi from "../assets/images/lexi.jpg";
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron />

        <hr></hr>
        <div id='homemain'>
        <p>
          The pregnancy journey can be a beautiful yet life altering time for
          everyone involved. As your doula, I am here to help support you and
          your family. I provide unbiased support to help prepare you for the
          journey ahead. My goal as your doula is to aid in your knowledge,
          empower you, and make sure you have the tools you need to have the
          best pregnancy and postpartum experience possible. I would love to
          discuss your needs and how I can help you reach your birth goals.
          Click here to schedule your free consultation today!{" "}
        </p>

        <Card className="bg-dark text-white" id='homecard'> 
  <Card.Img src={Lexi} alt="baby lexi" />
  <Card.ImgOverlay>
    <Card.Text>
    <div id="chatmain">
              <Link to="/services">
                <a href="/services">
                  <h1>Let's Chat!</h1>
                </a>
              </Link>
              </div>
    </Card.Text>
  </Card.ImgOverlay>
</Card>
      
  
        </div>
        <br></br>
        <div id="homeblog">
          <div>
            <h3>The</h3>
            <h2>Living the Amped Life</h2>
            <h3>Blog</h3>
            <div id="homeblogbutton">
              <a href="instagram.com/ampedlife360">Read More</a>
            </div>
          </div>
          <img id="babypic1" alt="newborn" src={Babypic1} />
        </div>
        <div id="igfeed">
          <InstagramEmbed
            url="https://www.instagram.com/urxfavxauthor/"
            clientAccessToken="123|456"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
    );
  }
}

export default Home;
