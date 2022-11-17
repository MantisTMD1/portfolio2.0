import React from "react";
import "../styles/about.css";
import Selfie from "../assets/selfie.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  return (
    <div className="about">
      <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
        <h3>
          <span>00.</span>About Me
        </h3>
      </AnimationOnScroll>
      <div data-aos="fade-up"data-aos-easing="ease-in-out">
      <img src={Selfie} alt="Profesional headshot" className="responsive"></img>
      
        <p>
          Hello world! I'm Evan, a web developer based in Minneapolis, MN. I
          love building and designing websites and web applications. If you like
          what you see on here or you just want to chat, shoot me a message.
          Otherwise, check out some of my projects below!
        </p>
        </div>
    </div>
  );
}

export default About;
