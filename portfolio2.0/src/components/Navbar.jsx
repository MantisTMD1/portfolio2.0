import React from "react";
import { stack as Menu } from "react-burger-menu";
import "../styles/navbar.css";
import { Link } from "react-scroll";

const NavMenu = (props) => {
  return (
    <Menu {...props} right width={"280px"}>
      <Link
        eventKey="1"
        smooth={true}
        to="header"
        isDynamic={true}
        offset={-110}
        href="/#"
      >
        <a className="menu-item">Home</a>
      </Link>

      <Link smooth={true} to="about" isDynamic={true} href="/#">
        <a className="menu-item">
          <span>00.</span>About
        </a>
      </Link>

      <Link smooth={true} to="tech" isDynamic={true} href="/#">
        <a className="menu-item">
          <span>01.</span>Tech
        </a>
      </Link>

      <Link
        smooth={true}
        to="projects"
        offset={1300}
        isDynamic={true}
        href="/#"
      >
        <a className="menu-item">
          <span>02.</span>Projects
        </a>
      </Link>

      <Link
      // smooth={true}
        smooth="easeInCubic"
        to="contact"
        offset={700}
        isDynamic={true}
        href="/#"
      >
        <a className="menu-item">
          <span>03.</span>Contact
        </a>
      </Link>
    </Menu>
  );
};

export default NavMenu;
