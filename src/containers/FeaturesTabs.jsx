import React, { useState } from "react";

// components
import TabsMenu from "../components/TabsMenu";
import TabChildren from "../components/TabChildren";

// constants
import { TabsItems, TabsContent } from "../common/constants/TabsItems";

// images
import SimpleBookmarkingImage from "../assets/images/illustration-features-tab-1.svg";
import SpeedySearchingImage from "../assets/images/illustration-features-tab-2.svg";
import EasySharingImage from "../assets/images/illustration-features-tab-3.svg";

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
          <TabChildren
            image={SimpleBookmarkingImage}
            tabTitle={TabsContent.simpleBookmarking.tabTitle}
            tabDescription={TabsContent.simpleBookmarking.tabDescription}
          />
        ) : option === 2 ? (
          <TabChildren
            image={SpeedySearchingImage}
            tabTitle={TabsContent.speedySearching.tabTitle}
            tabDescription={TabsContent.speedySearching.tabDescription}
          />
        ) : (
          <TabChildren
            image={EasySharingImage}
            tabTitle={TabsContent.easySharing.tabTitle}
            tabDescription={TabsContent.easySharing.tabDescription}
          />
        )}
      </div>
    </>
  );
};

export default FeaturesTabs;
