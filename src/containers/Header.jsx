import React, { useState } from "react";

// images and icons
import Logo from "../assets/images/logo-bookmark.svg";
import LogoWhite from "../assets/images/logo-bookmark-white.svg";
import HamburguerIcon from "../assets/images/icon-hamburger.svg";
import CloseIcon from "../assets/images/icon-close.svg";

//components
import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";

// styles
import "../styles/Header.scss";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className={`header ${isOpenMenu && "header-active"}`}>
      <img
        src={isOpenMenu ? LogoWhite : Logo}
        className="logo"
        alt="Bookmark Landing"
      />

      <div className="desktop-navbar">
        <Navbar />
      </div>

      <div className="mobile-menu-container">
        <div onClick={handleToggleMenu}>
          <img src={isOpenMenu ? CloseIcon : HamburguerIcon} alt="" />
        </div>
        {isOpenMenu && <MobileMenu />}
      </div>
    </header>
  );
};

export default Header;
