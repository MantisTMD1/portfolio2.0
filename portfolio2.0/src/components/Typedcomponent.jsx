import React, { Component } from "react";
import Typed from "react-typed";
import "../styles/typed.css";

class Typedcomponent extends Component {
  render() {
    return (
      <div className="header">
        <Typed strings={["Hi, I am WebDevEv"]} typeSpeed={30} />
        <br></br>
        <div className="header-2">
          <Typed strings={["I am a Frontend Developer"]} typeSpeed={50}></Typed>
        </div>
      </div>
    );
  }
}

export default Typedcomponent;
