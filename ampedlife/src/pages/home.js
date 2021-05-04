import React from "react";
import Jumbotron from "../components/jumbotron";
import Jumboimage1 from '../assets/images/jumboimage1.jpg'
import Jumboimage2 from '../assets/images/jumboimage2.jpg'
import Jumboimage3 from '../assets/images/jumboimage3.jpg'
import Babypic1 from '../assets/images/baby.jpg'
import InstagramEmbed from 'react-instagram-embed';


class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <h1 id="welcomeintro">Congratulations on your New Journey!</h1>

        <p id='welcomemessage'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
          varius tortor. Fusce lobortis ex vitae imperdiet lacinia. Morbi
          fringilla laoreet est et pretium. Etiam purus justo, ultrices iaculis
          lacus sed, convallis pulvinar dui. Suspendisse ligula ante, porttitor
          id viverra id, scelerisque ac tellus. Vivamus lobortis eget eros vel
          hendrerit. Sed eget neque vulputate, cursus justo ut, porttitor
          ligula. Aliquam porta faucibus ex ut aliquam. Nam fermentum lectus nec
          ipsum bibendum tristique. Fusce lorem nisi, maximus at varius ut,
          interdum ut nisl. Sed in varius sapien, non iaculis purus. Curabitur
          auctor semper nisi vitae sodales. Aenean ut placerat ligula. Etiam
          auctor venenatis mauris, at semper eros suscipit et. Pellentesque non
          neque felis.
        </p>
          <div id ='startbutton'>
              <a href='#' >Let's Start Here</a>
          </div>
          <hr id='hardbreak'></hr>
          <row id='rowone'>
<img id='homepics' src ={Jumboimage1}/> 
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
          varius tortor. Fusce lobortis ex vitae imperdiet lacinia. Morbi
          fringilla laoreet est et pretium. Etiam purus justo, ultrices iaculis
          lacus sed, convallis pulvinar dui. Suspendisse ligula ante, porttitor
          id viverra id, scelerisque ac tellus. Vivamus lobortis eget eros vel
          hendrerit. Sed eget neque vulputate, cursus justo ut, porttitor
          ligula. Aliquam porta faucibus ex ut aliquam. Nam fermentum lectus nec
          ipsum bibendum tristique. Fusce lorem nisi, maximus at varius ut,
          interdum ut nisl. Sed in varius sapien, non iaculis purus. Curabitur
          auctor semper nisi vitae sodales. Aenean ut placerat ligula. Etiam
          auctor venenatis mauris, at semper eros suscipit et. Pellentesque non
          neque felis.
</p>
          </row>
          <row id='rowtwo'>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
          varius tortor. Fusce lobortis ex vitae imperdiet lacinia. Morbi
          fringilla laoreet est et pretium. Etiam purus justo, ultrices iaculis
          lacus sed, convallis pulvinar dui. Suspendisse ligula ante, porttitor
          id viverra id, scelerisque ac tellus. Vivamus lobortis eget eros vel
          hendrerit. Sed eget neque vulputate, cursus justo ut, porttitor
          ligula. Aliquam porta faucibus ex ut aliquam. Nam fermentum lectus nec
          ipsum bibendum tristique. Fusce lorem nisi, maximus at varius ut,
          interdum ut nisl. Sed in varius sapien, non iaculis purus. Curabitur
          auctor semper nisi vitae sodales. Aenean ut placerat ligula. Etiam
          auctor venenatis mauris, at semper eros suscipit et. Pellentesque non
          neque felis.
</p>
<img id='homepics' src ={Jumboimage2}/>
          </row>
          <row id ='rowthree'>
<img id='homepics' src ={Jumboimage3}/>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
          varius tortor. Fusce lobortis ex vitae imperdiet lacinia. Morbi
          fringilla laoreet est et pretium. Etiam purus justo, ultrices iaculis
          lacus sed, convallis pulvinar dui. Suspendisse ligula ante, porttitor
          id viverra id, scelerisque ac tellus. Vivamus lobortis eget eros vel
          hendrerit. Sed eget neque vulputate, cursus justo ut, porttitor
          ligula. Aliquam porta faucibus ex ut aliquam. Nam fermentum lectus nec
          ipsum bibendum tristique. Fusce lorem nisi, maximus at varius ut,
          interdum ut nisl. Sed in varius sapien, non iaculis purus. Curabitur
          auctor semper nisi vitae sodales. Aenean ut placerat ligula. Etiam
          auctor venenatis mauris, at semper eros suscipit et. Pellentesque non
          neque felis.
</p>
          </row>
          <hr></hr>
          <div id = 'homeblog'>
              <div>
              <h3>The</h3>
              <h2>Living the Amped Life</h2>
              <h3>Blog</h3>
              <div id='homeblogbutton'><a href='#'>Read More</a></div>

              </div>
              <img id ='babypic1'src ={Babypic1}/>
          </div>
          <div id ='igfeed'>
          <InstagramEmbed
  url='https://www.instagram.com/urxfavxauthor/'
  clientAccessToken='123|456'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
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
