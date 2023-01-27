import React from "react";

//styles
import "../styles/MainInfo.scss";

const MainInfo = () => {
  return (
    <div className="main-info-container">
      <h2 className="main-title">A Simple Bookmark Manager</h2>
      <p className="main-description">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free
      </p>

      <div className="main-buttons-container">
        <button>Get it on Chrome</button>
        <button>Get it on Firefox</button>
      </div>
    </div>
  );
};

export default MainInfo;
