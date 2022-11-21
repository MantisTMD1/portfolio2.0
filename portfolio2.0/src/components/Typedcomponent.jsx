import React, { Component } from "react";
import Typed from "react-typed";
import "../styles/typed.css";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";

class Typedcomponent extends Component {
  render() {
    return (
      <>
        <div className="header">
          <Typed strings={["Hi, I'm WebDevEv"]} typeSpeed={30} />
          <br></br>

          <div className="header-2">
            <Typed
              strings={["I'm a Frontend Developer"]}
              typeSpeed={50}
            ></Typed>
          </div>
          <div className = "social-icon-div">
          <a
            href="https://github.com/MantisTMD1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={40} id="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/evan-st-martin-64307a8b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin size={40} id="social-icon" />
          </a>
          <a href="mailto:evan.stmartin.dev@gmail.com">
            <MdOutlineMailOutline size={40} id="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/evanstm011/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram size={40} id="social-icon" />
          </a>
          </div>
        </div>
      </>
    );
  }
}

export default Typedcomponent;
