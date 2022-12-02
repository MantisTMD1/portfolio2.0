import React from "react";
import "../styles/contact.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, SetEmail] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const form = useRef();
  const text = "Submit";
  const [buttonText, setButtonText] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonText(text);
    }, 1000);
    return () => clearTimeout(timer);
  }, [buttonText]);

  function handleSubmit(e) {
    console.log(name, email, message);
    setName("");
    SetEmail("");
    setMessage("");
  }

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_exewz8s",
        "template_id",
        form.current,
        "user_TrXPs7sSN6hdlMgRRuFAG"
      )

      .then(
        (result) => {
          console.log(result.text);

          alert("Thanks for reaching out!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Oops! Make sure email is correct 🤭");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  return (
    <>
      <div id="contact">
        <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
          <h3>
            <span>03.</span>Contact Form
          </h3>
        </AnimationOnScroll>

        <div
          className="contact-container"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <p>
            My inbox is always open! I love hearing about new opportunities, big
            or small. Whether you have a question or just want to say hi, I'll
            try my best to get back to you. Feel free to send a message with the
            form below or click{" "}
            <a
              href="mailto:evan.stmartin.dev@gmail.com"
              id="email-contact-form"
            >
              here
            </a>{" "}
            to email me directly.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <label className="form-inputs">Name</label>

            <input
              className="name-email"
              id="message"
              name="message"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <br></br>
            <label className="form-inputs">Email</label>

            <input
              className="name-email"
              id="message"
              name="message"
              type="email"
              value={email}
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
            />

            <br></br>
            <label className="form-inputs">Message</label>
            <textarea
              id="text-area"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <br></br>
            <button
              type="submit"
              value="Submit"
              id="submit-button"
              onClick={() => {
                handleSubmit();
                setButtonText("Success!");
              }}
            >
              {buttonText}
            </button>
          </form>
          {error && (
            <h4 id="email-error" style={{ color: "#373a47" }}>
              {error}
            </h4>
          )}
        </div>
      </div>
    </>
  );
}
export default Contact;
