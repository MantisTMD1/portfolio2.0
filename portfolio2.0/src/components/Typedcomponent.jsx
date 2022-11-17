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
          
          <BsGithub size={40} id="social-icon" />
          <AiOutlineLinkedin size={40} id="social-icon" />
          <MdOutlineMailOutline size={40} id="social-icon" />
          <BsInstagram size={40} id="social-icon" />

        </div>
      </>
    );
  }
}

export default Typedcomponent;
