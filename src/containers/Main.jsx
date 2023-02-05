import React from "react";

//components
import MainInfo from "../components/MainInfo";

// images
import MainImage from "../assets/images/illustration-hero.svg";

//styles
import "../styles/Main.scss";

const Main = () => {
  return (
    <div className="main-container">
      <div className="hero-image-container">
        <img className="hero-image" src={MainImage} alt="hero illustration" />
      </div>

      <div className="main-info-container">
        <MainInfo />
      </div>
    </div>
  );
};

export default Main;
