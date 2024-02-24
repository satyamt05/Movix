import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentwrapper/Contentwrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
         
          <li className="menuItem">
          <Link to="About" className="menuItem">About</Link>
          </li>
          <li className="menuItem">
          <Link to="Faq" className="menuItem">FAQ</Link>
          </li>
          
        </ul>
        <div className="infoText">
          Stay tuned for more curated picks, reviews, and cinematic adventures.
          Lights, camera, action!
        </div>
        <div> © 2024 Movix. All Rights Reserved.</div>
        <br />
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
