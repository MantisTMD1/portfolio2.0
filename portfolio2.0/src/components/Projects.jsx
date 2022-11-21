import React from "react";
import "../styles/projects.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Lakelife from "../assets/lakelifehealth.png";
import Portfolio from "../assets/portfolioscreenshot.png";

function Projects() {
  return (
    <div className="projects">
      <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
        <h3>
          <span>02.</span>Projects
        </h3>
      </AnimationOnScroll>
      <div
        className="img-hover-zoom"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <a
          href="https://lakelifehealth.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={Lakelife} className="responsive"></img>
        </a>
      </div>
      <br></br>
      <span id="link-title" data-aos="fade-up" data-aos-easing="ease-in-out">
        Lakelife Health
      </span>
      <br></br>
      <span
        id="link-description"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        A static website with a simple contact form I built and designed for a
        growing Chiropractic practice.{" "}
      </span>
      <br></br>
      <div
        className="img-hover-zoom"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <a
          href="https://webdevev.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            src={Portfolio}
            id="portfolio-image"
            className="responsive"
          ></img>
        </a>
      </div>
      <br></br>
      <span id="link-title" data-aos="fade-up" data-aos-easing="ease-in-out">
        My Portfolio
      </span>
      <br></br>
      <span
        id="link-description"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        The website you are currently browsing was built with React and desgined
        by me. The contact form functionality was built utilizing Emails JS's
        API.{" "}
      </span>
    </div>
  );
}

export default Projects;
