import React from "react";
import "../styles/contact.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Contact() {
  return (
    <div className="contact">
      <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
        <h3>
          <span>03.</span>Contact Form
        </h3>
      </AnimationOnScroll>
    </div>
  );
}
export default Contact;
