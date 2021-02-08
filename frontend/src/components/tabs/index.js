import React, { useEffect, useState } from "react";
import { Tab } from "../index";
import {
  StyledTabs,
  StyledTabsListWrapper,
  StyledTabsList,
  StyledTabsContent,
  StyledTabsSpacer,
} from "./StyledTabs";

const Tabs = ({ disabled, tabsPurpose, tabsMetadata, className }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(+localStorage.getItem("activeTab") || 0);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTabIndex);
  }, [activeTabIndex]);

  const onClickTab = (tabIndex) => setActiveTabIndex(tabIndex);

  return (
    <StyledTabs className={className}>
      <StyledTabsListWrapper>
        <StyledTabsList
          disabled={disabled}
          role="tablist"
          aria-label={`Select ${tabsPurpose}`}
        >
          {tabsMetadata.map(({ label }, index) => (
            <Tab
              key={`tab-${index + Math.random()}`}
              label={label}
              isActive={index === activeTabIndex}
              onClick={() => onClickTab(index)}
            />
          ))}
        </StyledTabsList>
      </StyledTabsListWrapper>
      {tabsMetadata.map(({ label, renderContent }, index) => (
        <StyledTabsContent
          key={`tab-panel-${index + Math.random()}`}
          role="tabpanel"
          aria-labelledby={label}
          aria-hidden={index !== activeTabIndex}
          hidden={index !== activeTabIndex}
        >
          <StyledTabsSpacer />
          {renderContent()}
        </StyledTabsContent>
      ))}
      {/*    <StyledTabsContent
        role="tabpanel"
        aria-labelledby={tabsMetadata[activeTabIndex].label}
      >
        <StyledTabsSpacer />
        {tabsMetadata[activeTabIndex].renderContent()}
      </StyledTabsContent> */}
    </StyledTabs>
  );
};

export default Tabs;
