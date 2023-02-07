import React from "react";

// components
import FeaturesTabs from "./FeaturesTabs";

// styles
import "../styles/Features.scss";

const Features = () => {
  return (
    <div className="features-container">
      <h2 className="feature-title">Features</h2>

      <p className="feature-description">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <FeaturesTabs />
    </div>
  );
};

export default Features;
