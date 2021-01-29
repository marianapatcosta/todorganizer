import React, { useEffect, useState } from "react";
import { Tab } from "../index";
import {
  StyledTabs,
  StyledTabsListWrapper,
  StyledTabsList,
  StyledTabsContent,
  StyledTabsSpacer,
} from "./StyledTabs";

const Tabs = ({ disabled, tabsMetadata, className }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    const activeTab = localStorage.getItem("activeTab");
    activeTab && setActiveTabIndex(+activeTab);
  }, []);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTabIndex);
  }, [activeTabIndex]);

  const onClickTab = (tabIndex) => setActiveTabIndex(tabIndex);

  return (
    <StyledTabs className={className}>
      <StyledTabsListWrapper>
        <StyledTabsList disabled={disabled}>
          {tabsMetadata.map(({ label }, index) => (
            <Tab
              key={index + Math.random()}
              label={label}
              isActive={index === activeTabIndex}
              onClick={() => onClickTab(index)}
            />
          ))}
        </StyledTabsList>
      </StyledTabsListWrapper>
      <StyledTabsContent>
        <StyledTabsSpacer />
        {tabsMetadata[activeTabIndex].renderContent()}
      </StyledTabsContent>
    </StyledTabs>
  );
};

export default Tabs;
