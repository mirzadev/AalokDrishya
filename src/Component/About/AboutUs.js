import React from "react";
import "./AboutUsStyles.css";
import President_AD from "../../Assets/About/AnamikaChowdhury.jpg";
import VP_AD from "../../Assets/About/AnamikaChowdhury.jpg";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div className="about-container">
      <h1>ABOUT AALOK DRISHYA</h1>
      <p className="members-heading-subTitle">Devoted to Serve You the Best</p>
      <p className="aboutUs-description">
        Team Aalok Drishya is a group of passionate and talented individuals who
        come together to create stunning images and capture beautiful moments on
        your special day. Each team member brings their unique skill set and
        perspective to the table, ensuring that every aspect of your event
        photography is covered. Every team member plays a critical role in
        bringing your vision to life. The team also includes skilled editors who
        work behind the scenes to enhance the images, create a cohesive story,
        and produce a final product that exceeds your expectations. With our
        wedding photography team by your side, you can rest assured that every
        moment of your special day will be captured flawlessly.
      </p>
      <div>
        <h1>OUR TEAM</h1>
        <h2>FOUNDING MEMBERS</h2>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area1">
          {/* <div className="kp-members-area-image">
            <img src={President_AD} alt="member1" />
          </div> */}
          <h3>Quazi Rabbani</h3>
          <p>Co-Founder & Core Photographer</p>
          <div className="social-media">
            <Link
              to="https://www.facebook.com/anamika.ch22"
              target="_blank"
              rel="noreferrer"
            >
              <span className="fa-brands fa-facebook"></span>
            </Link>
            <Link
              to="https://instagram.com/home"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="fa-brands fa-instagram"
                id="social-instagram"
              ></span>
            </Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noreferrer">
              <span className="fa-brands fa-twitter" id="social-twiter"></span>
            </Link>
            <Link to="https://mail.google.com" target="_blank" rel="noreferrer">
              <span className="fa solid alt fa-envelope"></span>
            </Link>
          </div>
        </div>
        <div className="kp-members-area2">
          {/* <div className="kp-members-area-image">
            <img src={VP_AD} alt="member2" />
          </div> */}
          <h3>Anamika Chowdhury </h3>
          <p>Co-Founder & Core Photographer</p>
          <div className="social-media">
            <Link
              to="https://www.facebook.com/anamika.ch22"
              target="_blank"
              rel="noreferrer"
            >
              <span className="fa-brands fa-facebook"></span>
            </Link>
            <Link
              to="https://instagram.com/home"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="fa-brands fa-instagram"
                id="social-instagram"
              ></span>
            </Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noreferrer">
              <span className="fa-brands fa-twitter" id="social-twiter"></span>
            </Link>
            <Link to="https://mail.google.com" target="_blank" rel="noreferrer">
              <span className="fa solid alt fa-envelope"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
