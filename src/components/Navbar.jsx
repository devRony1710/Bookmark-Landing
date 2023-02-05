import React from "react";

// constants
import { links } from "../common/constants/Links";

// styles
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        {links.map((link, index) => (
          <li key={index} className="navbar-item">
            <a href={link.path}>{link.linkName}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
