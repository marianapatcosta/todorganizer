import React, { useState } from "react";
import { DownArrow } from "../../assets/icons";
import { KEYBOARD_CODES } from "../../constants";
import {
  StyledDropdown,
  StyledDropdownLabel,
  StyledDropdownHeader,
  StyledDropdownHeaderText,
  StyledDropdownHeaderArrow,
  StyledDropdownOptions,
  StyledDropdownOption,
} from "./StyledDropdown";
const {
  SPACE_KEY,
  ENTER_KEY,
  DOWN_ARROW_KEY,
  UP_ARROW_KEY,
  ESCAPE_KEY,
} = KEYBOARD_CODES;

const Dropdown = ({
  className,
  name,
  options,
  selectedOption,
  placeholder,
  onChooseOption,
  label,
  disabled,
  optionKey,
}) => {
  const findFocusedOptionIndex = () => {
    if (!!selectedOption) {
      return options.findIndex((option) =>
        optionKey
          ? option[optionKey] === selectedOption[optionKey]
          : option === selectedOption
      );
    }
    return 0;
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [focusedOptionIndex, setSelectedOptionIndex] = useState(
    findFocusedOptionIndex()
  );
  const [isKeyboardAccess, setIsKeyboardAccess] = useState(false);

  const toggleDropdownExpansion = () =>
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  const getDropdownHeader = () => {
    if (!!placeholder) return placeholder;
    if (!!selectedOption)
      return optionKey ? selectedOption[optionKey] : selectedOption;
  };

  const handleOptionChoose = (event, option) => {
    event.stopPropagation();
    onChooseOption(option);
    setIsExpanded(false);
    findFocusedOptionIndex();
  };

  const handleKeyDown = (event) => {
    event.stopPropagation();
    switch (event.which) {
      case DOWN_ARROW_KEY:
        return setSelectedOptionIndex((prevIndex) =>
          prevIndex === options.length - 1 ? 0 : prevIndex + 1
        );
      case UP_ARROW_KEY:
        return setSelectedOptionIndex((prevIndex) =>
          prevIndex === 0 ? options.length - 1 : prevIndex - 1
        );
      case SPACE_KEY:
        if (isExpanded) {
          return handleOptionChoose(event, options[focusedOptionIndex]);
        }
        setIsKeyboardAccess(true);
        return toggleDropdownExpansion();
      case ENTER_KEY:
        if (isExpanded) {
          return handleOptionChoose(event, options[focusedOptionIndex]);
        }
        setIsKeyboardAccess(true);
        return toggleDropdownExpansion();
      case ESCAPE_KEY:
        return setIsExpanded(false);
      default:
        return;
    }
  };

  return (
    <StyledDropdown className={className}>
      {!!label && (
        <StyledDropdownLabel htmlFor={name || label} disabled={disabled}>
          {label}
        </StyledDropdownLabel>
      )}
      <StyledDropdownHeader
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label={`Select ${name || label}`}
        aria-labelledby="StyledDropdownLabel"
        disabled={disabled}
        onClick={toggleDropdownExpansion}
        onKeyDown={handleKeyDown}
        onBlur={() => setIsExpanded(false)}
      >
        <StyledDropdownHeaderText>
          {getDropdownHeader()}
        </StyledDropdownHeaderText>
        <StyledDropdownHeaderArrow
          isExpanded={isExpanded}
          alt="dropdown arrow"
          src={DownArrow}
        />
        {isExpanded && (
          <StyledDropdownOptions
            aria-expanded={isExpanded}
            role="listbox"
            onMouseEnter={() => setIsKeyboardAccess(false)}
          >
            {options.map((option, index) => (
              <StyledDropdownOption
                aria-selected={option === selectedOption}
                role="option"
                key={`select-option-${index + Math.random()}`}
                isActive={option === selectedOption}
                isFocused={isKeyboardAccess && index === focusedOptionIndex}
                onClick={(event) => handleOptionChoose(event, option)}
              >
                {optionKey ? option[optionKey] : option}
              </StyledDropdownOption>
            ))}
          </StyledDropdownOptions>
        )}
      </StyledDropdownHeader>
    </StyledDropdown>
  );
};

export default Dropdown;
