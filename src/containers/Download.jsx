import React from "react";

// components
import DownloadCard from "../components/DownloadCard";

// styles
import "../styles/Download.scss";

// images
import ChromeIcon from "../assets/images/logo-chrome.svg";
import FirefoxIcon from "../assets/images/logo-firefox.svg";
import OperaIcon from "../assets/images/logo-opera.svg";

const Download = () => {
  return (
    <div className="download-section-container">
      <h2 className="download-title">Download the extension</h2>
      <p className="download-description">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize
      </p>

      <div className="download-cards-container">
        <DownloadCard
          cardTitle="Add to Chrome"
          cardVersion="Minimum version 62"
          cardImage={ChromeIcon}
        />
        <DownloadCard
          cardTitle="Add to Firefox"
          cardVersion="Minimum version 55"
          cardImage={FirefoxIcon}
          midCard="medium"
        />
        <DownloadCard
          cardTitle="Add to Opera"
          cardVersion="Minimum version 46"
          cardImage={OperaIcon}
          finalCard="finalCard"
        />
      </div>
    </div>
  );
};

export default Download;
