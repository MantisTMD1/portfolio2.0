import React from "react";
import "../styles/about.css";
import Selfie from "../assets/selfie.png";

function About() {
  return (
    <div className="about">
      <h3>
        <span>01.</span> About Me
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <img src={Selfie} alt="Profesional headshot" class="responsive"></img>
    </div>
  );
}

export default About;
