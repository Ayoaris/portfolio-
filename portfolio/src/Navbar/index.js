import React from "react";
import { NavbarStyle } from "./navbarStyle";
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <>
      <NavbarStyle>
        <div className="nav-main">
          <div className="logo">
            {" "}
            <img src={logo} alt="Resume Logo" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <span>01.</span> About
              </li>
              <li>
                <span>02.</span> Experience
              </li>
              <li>
                <span>03.</span> Work
              </li>
              <li>
                <span>04.</span> Contact
              </li>
            </ul>

            <div>
              <button>Resume</button>
            </div>
          </div>
        </div>
      </NavbarStyle>
    </>
  );
}

export default Navbar;
