import React from "react";
import {
  StyledToggleSwitch,
  StyledToggleSwitchLabel,
  StyledToggleSwitchSlider,
  StyledToggleInput,
} from "./StyledToggleSwitch";

const ToggleSwitch = ({
  className,
  name,
  label,
  leftLabel,
  rightLabel,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <StyledToggleSwitch className={className} label={label} disabled={disabled}>
      <StyledToggleInput
        type="checkbox"
        name={name || label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
      <StyledToggleSwitchSlider checked={checked} disabled={disabled}>
        <StyledToggleSwitchLabel disabled={disabled}>
          {checked && leftLabel}
        </StyledToggleSwitchLabel>
        <StyledToggleSwitchLabel>
          {!checked && rightLabel}
        </StyledToggleSwitchLabel>
      </StyledToggleSwitchSlider>
    </StyledToggleSwitch>
  );
};

export default ToggleSwitch;
