import React from "react";
import { stack as Menu } from "react-burger-menu";
import "../styles/navbar.css";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavMenu = (props) => {
  return (
    <Menu {...props} right>

      
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/">
        <span>00.</span>About
      </a>

      <a className="menu-item" href="/">
        <span>01.</span>Tech
      </a>

      <a className="menu-item" href="/">
        <span>02.</span>Projects
      </a>

      <a className="menu-item" href="/">
        <span>03.</span>Contact
      </a>
    </Menu>
  );
};

export default NavMenu;
