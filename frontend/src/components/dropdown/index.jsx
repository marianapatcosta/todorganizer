import React, { useState } from "react";
import { DownArrow } from "../../assets/icons";
import {
  StyledDropdown,
  StyledDropdownLabel,
  StyledDropdownHeader,
  StyledDropdownHeaderText,
  StyledDropdownHeaderArrow,
  StyledDropdownOptions,
  StyledDropdownOption,
} from "./StyledDropdown";

const Dropdown = ({
  className,
  options,
  selectedOption,
  onOptionClick,
  title,
  disabled,
  labelKey,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdownExpansion = () =>
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  const handleOptionClick = (e, option) => {
    e.stopPropagation();
    onOptionClick(option);
    setIsExpanded(false);
  };

  return (
    <StyledDropdown className={className}>
      <StyledDropdownLabel disabled={disabled}>{title}</StyledDropdownLabel>
      <StyledDropdownHeader
        disabled={disabled}
        onClick={toggleDropdownExpansion}
      >
        <StyledDropdownHeaderText>{labelKey ? selectedOption[labelKey] : selectedOption}</StyledDropdownHeaderText>
        <StyledDropdownHeaderArrow
          isExpanded={isExpanded}
          alt="dropdown arrow"
          src={DownArrow}
        />
        {isExpanded && (
          <StyledDropdownOptions>
            {options.map((option, index) => (
              <StyledDropdownOption
                key={index * Math.random()}
                isActive={option === selectedOption}
                onClick={(e) => handleOptionClick(e, option)}
              >
                {labelKey ? option[labelKey] : option}
              </StyledDropdownOption>
            ))}
          </StyledDropdownOptions>
        )}
      </StyledDropdownHeader>
    </StyledDropdown>
  );
};

export default Dropdown;
