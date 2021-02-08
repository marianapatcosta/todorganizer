import React from "react";
import { isEventValid } from "../../utils";
import { StyledTab } from "./StyledTab";

const Tab = ({ disabled, isActive, label, onClick, tabClassName }) => {
  const handleTabSelection = (event) => isEventValid(event) && onClick();

  return (
    <StyledTab
      role="tab"
      aria-selected={isActive}
      tabIndex={disabled ? -1 : 0}
      id={label}
      className={tabClassName}
      isActive={isActive}
      disabled={disabled}
      onClick={handleTabSelection}
      onKeyDown={handleTabSelection}
    >
      {label}
    </StyledTab>
  );
};

export default Tab;
