import "../assets/CSS/Header.css";

import { Fade } from "react-reveal";
import React from "react";
import logo from "../assets/images/SkillShip-FoundationBlack.png";

function Header() {
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <nav className="header">
          <a href="https://skillshipfoundation.com/" className="logo">
            <img
              className="logo-name  "
              height="45px"
              src={logo}
              alt="skillship_vellore"
            />
          </a>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#community">Community</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </Fade>
  );
}
export default Header;
