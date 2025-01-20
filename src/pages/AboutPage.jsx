/* eslint-disable no-unused-vars */
// header, link React/dom/css/footer/
import "../styles/About.css";
import React from 'react';
import Proflex from "../images/profileImg.png"

  // In `Card`, we can assign a style from an object by using curly braces
  // We are assigning the card, heading, and content all from our `style` object
const AboutPage = () => {
    return (
    <div className="div01"><div className="AboutPageCard" >
        <section className="aboutWrap">
    <div className="Heading">Descriptive synopsis:</div>
    <div id="Msg">
    Welcome! I am Marlie, a passionate developer and visual artist with a unique blend of skills in communication, psychology, and technology.

With an Associate of Science in Mass Communications (minor in Psychology) from Volunteer State Community College, I’ve always been fascinated by the power of human connection and expression. This interest led me to further my career by diving into the world of coding. I graduated from Vanderbilt’s Full-Stack Developer Bootcamp, where I honed my technical skills and deepened my love for problem-solving and creativity in web and application development.

As a developer, I thrive on the logic-puzzle aspect of building digital experiences, and I’m committed to continuous learning to keep my skills sharp. I believe that technology can be a canvas for creativity, and I strive to create engaging and meaningful user experiences.

In addition to my coding journey, I’m also a visual designer, creating both paintings and digital art. My art is driven by a desire to enhance mental well-being and bring joy to others. I’ve seen firsthand how art can uplift spirits, and it inspires me to integrate these principles into my work.

I’m excited to share my journey with you and explore the intersection of art and technology. Whether it’s through a website, an application, or a piece of art, my goal is to make the world a better, more beautiful place. Let’s connect and create something amazing together!

    <img id="Proflex" src={Proflex} className="profileImg"/>
</div>
</section>
    </ div></div>
    );
}
export default AboutPage