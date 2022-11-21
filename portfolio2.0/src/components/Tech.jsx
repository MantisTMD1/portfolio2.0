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
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="icons-container"
        >
          <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
            <SiHtml5 size={120} id="html-icon" />
          </AnimationOnScroll>
          <span id="tech-icon-span">HTML</span>
          <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
            <IoLogoCss3 size={120} id="css-icon" />
          </AnimationOnScroll>
          <span id="tech-icon-span">CSS</span>
          <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
            <SiJavascript size={120} id="js-icon" />
          </AnimationOnScroll>
          <span id="tech-icon-span">JAVASCRIPT(ES6+)</span>
          <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
            <SiBootstrap size={120} id="bootstrap-icon" />
          </AnimationOnScroll>
          <span id="tech-icon-span">BOOTSTRAP</span>
          <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
            <FaReact size={120} id="react-icon" />
          </AnimationOnScroll>
          <span id="tech-icon-span">REACTJS</span>
          <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
            <FaNodeJs size={120} id="node-icon" />
          </AnimationOnScroll>
          <span id="tech-icon-span">NODEJS</span>
        </div>
        <div className="buzzword-list">
          <ul>
            <li
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              Mobile first development
            </li>
            <li
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="900"
            >
              Fully responsive design
            </li>
            <li
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              Static and dynamic web pages
            </li>
            <li
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="700"
            >
              Eccomerce development
            </li>
            <li
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="600"
            >
              Google searchbar abuser
            </li>
            <li
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
            >
              World-class fantasy football manager{" "}
            </li>
            <li
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="400"
            >
              Professional dog petter
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Tech;
