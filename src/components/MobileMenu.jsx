import React from "react";

//styles
import "../styles/MobileMenu.scss";

const links = [
  {
    linkName: "Features",
    path: "/features",
  },
  {
    linkName: "Pricing",
    path: "/features",
  },
  {
    linkName: "Contact",
    path: "/features",
  },
  {
    linkName: "Login",
    path: "/features",
  },
];

const MenuItem = ({ path, linkName }) => {
  return <a href={path}>{linkName}</a>;
};

const MobileMenu = () => {
  return (
    <nav>
      <ul>
        {links.map((item) => (
          <li>
            <hr />
            <MenuItem path={item.path} linkName={item.linkName} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
