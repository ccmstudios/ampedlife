import React from "react";
import Jumbotron from "../components/jumbotron";
import Jumboimage1 from "../assets/images/jumboimage1.jpg";
import Jumboimage2 from "../assets/images/jumboimage2.jpg";
import Jumboimage3 from "../assets/images/jumboimage3.jpg";
import Babypic1 from "../assets/images/baby.jpg";
import InstagramEmbed from "react-instagram-embed";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <h1 id="welcomeintro">Congratulations on your New Journey!</h1>

        <p id="welcomemessage">
          The pregnancy journey can be a beautiful yet life altering time for
          everyone involved. As your doula, I am here to help support you and
          your family on this journey. I provide unbiased support and help
          prepare you for the journey ahead. My goal as your doula is to aid in
          your knowledge, empower you, and make sure you have the tools you need
          to have the best pregnancy and postpartum experience possible. To
          discuss your options further, click here to schedule your free
          consultation today!
        </p>
        <div id="startbutton">
          <a href="instagram.com/ampedlife360">Let's Start Here</a>
        </div>
        <hr id="hardbreak"></hr>
        <row id="rowone">
          <img id="homepics" alt="pregnancy " src={Jumboimage1} />
          <p>
            A doula is an individual who provides non-medical support in the
            form of physical and emotional support during your pregnancy, birth
            and postpartum journey. By assisting you in gathering information
            required to fit your needs, I help you execute your desired
            pregnancy preference. I also help promote healing and remove anxiety
            on your pregnancy journey.
          </p>
        </row>
        <row id="rowtwo">
          <p>
            Additional support to the birthing person and their partner.
            Physical support Emotional support Evidence based support Studies
            have shown that people provided with continuous labor support are
            less likely to have cesarean sections (c-sections) or use pain
            medications!
            <br></br>
           <a href='https://www.cochrane.org/CD003766/PREG_continuous-support-women-during-childbirth'>https://www.cochrane.org/CD003766/PREG_continuous-support-women-during-childbirth</a>
          </p>
          <img id="homepics" alt="baby" src={Jumboimage2} />
        </row>
        <row id="rowthree">
          <img id="homepics" alt="family" src={Jumboimage3} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
            varius tortor. Fusce lobortis ex vitae imperdiet lacinia. Morbi
            fringilla laoreet est et pretium. Etiam purus justo, ultrices
            iaculis lacus sed, convallis pulvinar dui. Suspendisse ligula ante,
            porttitor id viverra id, scelerisque ac tellus. Vivamus lobortis
            eget eros vel hendrerit. Sed eget neque vulputate, cursus justo ut,
            porttitor ligula. Aliquam porta faucibus ex ut aliquam. Nam
            fermentum lectus nec ipsum bibendum tristique. Fusce lorem nisi,
            maximus at varius ut, interdum ut nisl. Sed in varius sapien, non
            iaculis purus. Curabitur auctor semper nisi vitae sodales. Aenean ut
            placerat ligula. Etiam auctor venenatis mauris, at semper eros
            suscipit et. Pellentesque non neque felis.
          </p>
        </row>
        <hr></hr>
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
