import React from "react";
import "../styles/projects.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Lakelife from "../assets/lakelifehealth.png";
import Portfolio from "../assets/portfolioscreenshot.png";
import Spotify from "../assets/spotifyclone.png";

function Projects() {
  return (
    <div className="projects">
      <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
        <h3>
          <span>02.</span>Projects
        </h3>
      </AnimationOnScroll>
      <div
        className="img-hover-zoom"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <a
          href="https://lakelifehealth.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={Lakelife} className="responsive"></img>
        </a>
      </div>
      <br></br>
      <span id="link-title" data-aos="fade-up" data-aos-easing="ease-in-out">
        Lakelife Health
      </span>
      <br></br>
      <span
        id="link-description"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        A multi-page static website with a simple contact form I built and
        designed for a growing Chiropractic practice.{" "}
      </span>
      <br></br>
      <div
        className="img-hover-zoom"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <a
          href="https://webdevev.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            src={Portfolio}
            id="portfolio-image"
            className="responsive"
          ></img>
        </a>
      </div>
      <br></br>
      <span id="link-title" data-aos="fade-up" data-aos-easing="ease-in-out">
        My Portfolio
      </span>
      <br></br>
      <span
        id="link-description"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        The website you are currently browsing was built with React and desgined
        by me. The contact form functionality was built utilizing{" "}
        <a
          href="https://www.emailjs.com/docs/"
          target="_blank"
          rel="noopener noreferrer"
          id="spotify-api-link"
        >
          {" "}
          EmailJS
        </a>
        's free API.{" "}
      </span>

      <div
        className="img-hover-zoom"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <a>
          {" "}
          <img src={Spotify} id="spotify-image" className="responsive"></img>
        </a>
      </div>
      <br></br>
      <span id="link-title" data-aos="fade-up" data-aos-easing="ease-in-out">
        Spotify Web App
      </span>
      <br></br>
      <span
        id="link-description"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        I built this fully functioning web application with{" "}
        <a
          href="https://developer.spotify.com/documentation/web-api/"
          target="_blank"
          rel="noopener noreferrer"
          id="spotify-api-link"
        >
          Spotify
        </a>
        's free to premium members API by following their documentation. This app can search for
        songs, create and save playlists. This site is no longer live because
        Heroku dropped their free hosting model. Currently refactoring for
        Netlify. This site was also built in React.{" "}
      </span>
    </div>
  );
}

export default Projects;
