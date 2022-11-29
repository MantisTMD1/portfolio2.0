import React, { Component } from "react";
import Typed from "react-typed";
import "../styles/typed.css";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import Delayed from "../components/Delayed.jsx";

class Typedcomponent extends Component {
  render() {
    return (
      <>
        <div className="header">
          <Delayed waitBeforeShow={2500}>
            <Typed
              strings={["Hi, I'm Evan"]}
              typeSpeed={40}
              className="typed-load-smooth"
            />
            <br></br>
          </Delayed>
          <div className="header-2">
            <Delayed waitBeforeShow={3000}>
              <Typed
                strings={["I'm a software devleoper"]}
                typeSpeed={60}
              ></Typed>
            </Delayed>
          </div>

          <div className="social-icon-div">
            <Delayed waitBeforeShow={4500}>
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
            </Delayed>
          </div>
        </div>
      </>
    );
  }
}

export default Typedcomponent;
