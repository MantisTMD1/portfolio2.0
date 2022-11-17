import React from "react";
import { stack as Menu } from "react-burger-menu";
import "../styles/navbar.css";

const NavMenu = (props) => {
  return (
    <Menu {...props} right>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/">
        <span>01.</span>About
      </a>

      <a className="menu-item" href="/">
        <span>02.</span>Tech
      </a>

      <a className="menu-item" href="/">
        <span>03.</span>Projects
      </a>

      <a className="menu-item" href="/">
        <span>04.</span>Contact
      </a>
    </Menu>
  );
};

export default NavMenu;
