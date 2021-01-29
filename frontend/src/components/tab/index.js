import React from "react";
import { StyledTab } from "./StyledTab";

const Tab = ({ disabled, isActive, label, onClick, tabClassName }) => {

  return (
      <StyledTab
        className={tabClassName}
        isActive={isActive}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </StyledTab>
  )
};

export default Tab;
