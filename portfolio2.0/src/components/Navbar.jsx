import React from "react";
import { stack as Menu } from "react-burger-menu";
import "../styles/navbar.css";

const NavMenu = (props) => {
  return (
    <Menu {...props} right width={"280px"}>
      <a className="menu-item" href="#home">
        Home
      </a>

      <a className="menu-item" href="#about ">
        <span>00.</span>About
      </a>

      <a className="menu-item" href="#tech">
        <span>01.</span>Tech
      </a>

      <a className="menu-item" href="#projects">
        <span>02.</span>Projects
      </a>

      <a className="menu-item" href="#contact">
        <span>03.</span>Contact
      </a>
    </Menu>
  );
};

export default NavMenu;
