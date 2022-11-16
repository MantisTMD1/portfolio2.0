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
        About
      </a>

      <a
        className="menu-item"
        href="/"
        target="_blank"
        rel="noreferrer"
      >
        Tech
      </a>

      <a className="menu-item" href="/">
        Projects
      </a>

      <a className="menu-item" href="/">
        Contact
      </a>
    </Menu>
  );
};

export default NavMenu;