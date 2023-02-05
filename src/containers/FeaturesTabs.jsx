import React, { useState } from "react";

// components
import TabsMenu from "../components/TabsMenu";

// constants
import { TabsItems } from "../common/constants/TabsItems";

// styles
import "../styles/FeatureTabs.scss";

const FeaturesTabs = () => {
  const [option, setOption] = useState(TabsItems[0].tabOption);
  return (
    <>
      <div className="tabs-container">
        {TabsItems.map((tab, index) => (
          <TabsMenu
            key={index}
            tabName={tab.tabName}
            handleSelectOption={() => setOption(tab.tabOption)}
          />
        ))}
      </div>

      <div className="tabs-children-container">
        {option === 1 ? (
          <div>hola1</div>
        ) : option === 2 ? (
          <div>hola2</div>
        ) : (
          <div>Hola 3</div>
        )}
      </div>
    </>
  );
};

export default FeaturesTabs;
