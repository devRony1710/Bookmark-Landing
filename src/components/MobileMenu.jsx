import React from "react";

// constants
import { links } from "../common/constants/Links";

//styles
import "../styles/MobileMenu.scss";

const MenuItem = ({ path, linkName }) => {
  return <a href={path}>{linkName}</a>;
};

const MobileMenu = () => {
  return (
    <nav className="mobile-menu-wrapper">
      <ul className="mobile-menu-list">
        {links.map((item, index) => (
          <li key={index} className="mobile-menu-item">
            <hr />
            <MenuItem path={item.path} linkName={item.linkName} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
