import React from "react";
import { stack as Menu } from "react-burger-menu";
import "../styles/navbar.css";
import { useRef } from "react";

const NavMenu = (props) => {
  const offNavRef = useRef();
  const offsetValue = -280;

  const closeOffCanvas = () => offNavRef.current.backdrop.click();

  return (
    <Menu right width={"280px"} ref={offNavRef}>
      <a
        className="menu-item"
        href="#home"
        onClick={closeOffCanvas}
        offset={offsetValue}
      >
        Home
      </a>

      <a
        className="menu-item"
        href="#about"
        onClick={closeOffCanvas}
        offset={offsetValue}
      >
        <span>00.</span>About
      </a>

      <a
        className="menu-item"
        href="#tech"
        onClick={closeOffCanvas}
        offset={offsetValue}
      >
        <span>01.</span>Tech
      </a>

      <a
        className="menu-item"
        href="#projects"
        onClick={closeOffCanvas}
        offset={offsetValue}
      >
        <span>02.</span>Projects
      </a>

      <a
        className="menu-item"
        href="#contact"
        onClick={closeOffCanvas}
        offset={offsetValue}
      >
        <span>03.</span>Contact
      </a>
    </Menu>
  );
};

export default NavMenu;
