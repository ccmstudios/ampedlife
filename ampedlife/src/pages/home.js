import React from "react";
import Jumbotron from "../components/jumbotron";
import Lexi from "../assets/images/lexi.jpg";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Doulainfo from "../assets/images/doulainfo.png";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron />

        <hr></hr>
        <div id="homemain">
          <h1>Welcome</h1>
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
<br></br>
<br></br>
          <Card className="bg-dark text-white" id="homecard">
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
<br></br>
          <h1>What is a Doula?</h1>
          <br></br>
          <p>
            A doula is an individual who provides non-medical support in the
            form of physical and emotional support during your pregnancy, birth
            and postpartum journey. By assisting you in gathering information
            required to fit your needs, I help you execute your desired
            pregnancy preference. I also help promote healing and remove anxiety
            on your pregnancy journey.
          </p>
          <br></br>
          <h1>Why Hire a Doula?</h1>
          <br></br>
          <img src = {Doulainfo} alt ='doula info' style ={{width:'600px', objectFit:"cover"}}/>

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
          <div id="igfeed">
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe
              title="IG Feed"
              src="//lightwidget.com/widgets/49f09e35e802521ea6c7bfaaf56b6382.html"
              scrolling="no"
              allowtransparency="true"
              class="lightwidget-widget"
              style={{
                width: "250%",
                border: "0",
                overflow: "hidden",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
