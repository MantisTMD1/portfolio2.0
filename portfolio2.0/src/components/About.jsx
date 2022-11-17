import React from "react";
import "../styles/about.css";
import Selfie from "../assets/selfie.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  return (
    <div className="about">
      <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
        <h3>
          <span>01.</span>About Me
        </h3>
      </AnimationOnScroll>
      <img src={Selfie} alt="Profesional headshot" className="responsive"></img>
      <AnimationOnScroll animateOnce={true} duration={0.5} animateIn="animate__fadeInLeftBig">
        <p>
          Hello world! I'm Evan, a web developer based in Minneapolis, MN. I
          love building and designing websites and web applications. If you like
          what you see on here or you just want to chat, shoot me a message.
          Otherwise, check out some of my projects below!
        </p>
      </AnimationOnScroll>
    </div>
  );
}

export default About;
