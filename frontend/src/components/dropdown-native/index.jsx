import React, { useState } from "react";
import {
  StyledDropdown,
  StyledDropdownContainer,
  StyledDropdownLabel,
  StyledDropdownHeader,
  StyledDropdownOption,
} from "./StyledDropdownNative";

const DropdownNative = ({
  className,
  name,
  placeholder,
  options,
  selectedOption,
  onChooseOption,
  label,
  disabled,
  optionKey,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleOptionChange = (event) => {
    event.stopPropagation();
    onChooseOption(event.target.value);
  };

  return (
    <StyledDropdownContainer className={className}>
      {!!label && (
        <StyledDropdownLabel htmlFor={name || label} disabled={disabled}>
          {label}
        </StyledDropdownLabel>
      )}
      <StyledDropdown isExpanded={isExpanded}>
        <StyledDropdownHeader
          aria-label={`Select ${name || label}`}
          name={name || label}
          disabled={disabled}
          value={selectedOption}
          onChange={handleOptionChange}
          onClick={() => setIsExpanded((prevIsExpanded) => !prevIsExpanded)}
          onBlur={() => setIsExpanded(false)}
        >
          {!!placeholder && (
            <StyledDropdownOption value="" hidden>
              {placeholder}
            </StyledDropdownOption>
          )}
          {options.map((option, index) => {
            const optionLabel = optionKey ? option[optionKey] : option;
            return (
              <StyledDropdownOption
                key={`dropdown-option-${index + Math.random()}`}
                value={optionLabel}
              >
                {optionLabel}
              </StyledDropdownOption>
            );
          })}
        </StyledDropdownHeader>
      </StyledDropdown>
    </StyledDropdownContainer>
  );
};

export default DropdownNative;
