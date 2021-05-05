import React from "react";
import Amexia from "../assets/images/amexia.jpg";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Meet Your Doula</h1>
        <h2>It's baby time</h2>
        <div id="aboutmain">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            libero a leo rhoncus tempus. Proin porta ac mauris vel eleifend.
            Vivamus malesuada, tortor a malesuada vehicula, elit augue tincidunt
            tellus, vitae tincidunt dui mi sed leo. Vivamus et tincidunt sem.
            Nullam bibendum vitae ipsum vitae consectetur. Vivamus hendrerit
            arcu ante, eu mollis libero varius eget. Integer bibendum tristique
            sem, ac dictum eros facilisis et. Donec sed accumsan velit, sagittis
            finibus tellus. Sed bibendum mi efficitur feugiat molestie. Proin
            quis libero ante. Duis cursus mattis sapien, at tincidunt leo
            consectetur quis. Nunc quis suscipit libero. Morbi quis vulputate
            mi, ut consequat diam. Praesent imperdiet interdum mauris at
            laoreet. Integer dictum porttitor nisl non dignissim. Proin mattis
            tellus nisl, in dapibus lorem eleifend non. Sed molestie magna id
            orci congue ullamcorper et vel sem. In sed tortor neque. Cras in
            diam feugiat, fermentum lorem rutrum, faucibus ante. Nunc venenatis
            iaculis odio quis tristique. Curabitur tempus elit nec dui pharetra
            sagittis. Aenean libero neque, lacinia id gravida in, interdum id
            tellus. Aenean erat nulla, malesuada id finibus at, rhoncus vel ex.
            Morbi bibendum sagittis nisl, in ornare ex maximus nec. Sed vel arcu
            at augue interdum consectetur quis a ligula. Maecenas vel venenatis
            leo. Curabitur ac rutrum velit, aliquam feugiat est. Proin non
            semper lorem, in ullamcorper leo. Nullam aliquam urna diam, in
            commodo diam fermentum condimentum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Sed imperdiet venenatis purus id euismod. Suspendisse rhoncus
            imperdiet dolor, ac dapibus felis congue id. In imperdiet maximus
            molestie. Nullam posuere sem nisl, id euismod dolor feugiat in.
            Quisque malesuada et dolor non congue. Sed euismod interdum mauris,
            eu pharetra nulla. Maecenas sollicitudin urna metus, ac semper neque
            finibus non. Maecenas quis sapien turpis.
          </p>
          <img src={Amexia} alt="Amexia Porterfield" />
        </div>
        <a href = 'www.instagram.com'>Schedule today!</a>
      </div>
    );
  }
}

export default About;
