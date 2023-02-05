import React from "react";

// styles
import "../styles/TabsMenu.scss";

const TabsMenu = ({ tabName, handleSelectOption }) => {
  return (
    <div className="tab-item-container">
      <button onClick={handleSelectOption}>{tabName}</button>
    </div>
  );
};

export default TabsMenu;
