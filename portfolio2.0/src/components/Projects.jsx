import React from "react";
import "../styles/projects.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Projects() {
  return <div className="projects">
    <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
          <h3>
            <span>02.</span>Projects
          </h3>
          <h3>Project section underway</h3>
        </AnimationOnScroll>
  </div>;
}

export default Projects;
