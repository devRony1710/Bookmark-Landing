import React from "react";

// styles
import "../styles/Features.scss";
import FeaturesTabs from "./FeaturesTabs";

const Features = () => {
  return (
    <>
      <div className="features-container">
        <h2 className="feature-title">Features</h2>
        <p className="feature-description">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <FeaturesTabs />
    </>
  );
};

export default Features;
