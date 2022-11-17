import React from "react";
import "../styles/tech.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { SiHtml5, SiJavascript, SiBootstrap } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";

function Tech() {
  return (
    <>
      <div className="tech">
        <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
          <h3>
            <span>01.</span>Technologies
          </h3>
        </AnimationOnScroll>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-out"
          className="icons-container"
        >
          <SiHtml5 size={120} id="html-icon" />
          <span id="tech-icon-span">HTML</span>
          <IoLogoCss3 size={120} id="css-icon" />
          <span id="tech-icon-span">CSS</span>
          <SiJavascript size={120} id="js-icon" />
          <span id="tech-icon-span">JAVASCRIPT(ES6+)</span>
          <SiBootstrap size={120} id="bootstrap-icon" />
          <span id="tech-icon-span">BOOTSTRAP</span>
          <FaReact size={120} id="react-icon" />
          <span id="tech-icon-span">REACTJS</span>
          <FaNodeJs size={120} id="node-icon" />
          <spanid id="tech-icon-span">NODEJS</spanid>
        </div>
        <div className="buzzword-list" data-aos="fade-right">
          <ul>
            <li>Mobile first development</li>
            <li>Fully responsive design</li>
            <li>Static and dynamic web pages</li>
            <li>Eccomerce development</li>
            <li>Google searchbar abuser</li>
            <li>World-class Fantasy football manager </li>
            <li>Professional dog petter</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Tech;
