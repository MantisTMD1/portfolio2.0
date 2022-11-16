import React from "react";
import "../styles/about.css";
import Selfie from "../assets/selfie.png";

function About() {
  return (
    <div className="about">
      <h3>
        <span>01.</span>About Me
      </h3>
      <img
        src={Selfie}
        data-aos="flip-left"
        alt="Profesional headshot"
        class="responsive"
      ></img>
      <p data-aos="flip-right">
        Hello world! I'm Evan, a web developer based in Minneapolis, MN. I love
        building and designing websites and web applications. If you like what
        you see on here or you just want to chat shoot me a message. Otherwise,
        check out some of my projects below!
      </p>
     
    </div>
  );
}

export default About;
