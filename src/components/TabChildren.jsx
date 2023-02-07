import React from "react";

// styles
import "../styles/TabsChildren.scss";

const TabChildren = ({ image, tabTitle, tabDescription }) => {
  return (
    <div className="children-container">
      <img className="tab-image" src={image} alt="tab illustrations" />

      <div className="tab-children-content">
        <h3>{tabTitle}</h3>
        <p>{tabDescription}</p>

        <button>More Info</button>
      </div>
    </div>
  );
};

export default TabChildren;
