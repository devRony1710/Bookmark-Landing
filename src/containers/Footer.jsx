import React from "react";

// images
import LogoWhite from "../assets/images/logo-bookmark-white.svg";
import LogoTwitter from "../assets/images/icon-twitter.svg";
import LogoFacebook from "../assets/images/icon-facebook.svg";

// styles
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img className="footer-logo" src={LogoWhite} alt="Logo Bookmark" />

        <ul className="footer-list-container">
          <li className="footer-list-item">
            <a href="/">Features</a>
          </li>
          <li className="footer-list-item">
            <a href="/">Pricing</a>
          </li>
          <li className="footer-list-item">
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className="footer-icons-container">
          <img src={LogoFacebook} alt="Logo Facebook" />
          <img src={LogoTwitter} alt="Logo Twitter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
