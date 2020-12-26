import React from "react";
import { StyledTab } from "./StyledTab";

const Tab = ({ disabled, isActive, label, onClick, className, }) => {

  return (
      <StyledTab
        className={className}
        isActive={isActive}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </StyledTab>
  )
};

export default Tab;
