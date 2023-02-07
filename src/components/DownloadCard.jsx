import React from "react";

// styles
import "../styles/DownloadCard.scss";

// images
import BgDots from "../assets/images/bg-dots.svg";

const DownloadCard = ({
  cardImage,
  cardTitle,
  cardVersion,
  midCard,
  finalCard,
}) => {
  return (
    <div className={`${midCard || finalCard} && card-container`}>
      <img src={cardImage} alt="" />
      <div className="card-info">
        <h4 className="card-title">{cardTitle}</h4>
        <p className="card-version">{cardVersion}</p>
      </div>

      <img src={BgDots} alt="Dots" />

      <button className="card-button">Add & Install Extension</button>
    </div>
  );
};

export default DownloadCard;
