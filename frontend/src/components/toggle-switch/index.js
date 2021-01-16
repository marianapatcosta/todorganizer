import React from "react";
import {
  StyledToggleSwitch,
  StyledToggleSwitchLabel,
  StyledToggleSwitchSlider,
} from "./StyledToggleSwitch";

const ToggleSwitch = ({
  className,
  label,
  leftLabel,
  rightLabel,
  checked,
  disabled,
  handleToggle,
}) => {
  return (
    <StyledToggleSwitch className={className} label={label} onClick={handleToggle}>
      {label && <StyledToggleSwitchLabel disabled={disabled}>{label}</StyledToggleSwitchLabel>}
      <StyledToggleSwitchSlider disabled={disabled} checked={checked}>
        <StyledToggleSwitchLabel disabled={disabled}>
          {checked && leftLabel}
        </StyledToggleSwitchLabel>
        <StyledToggleSwitchLabel>{!checked && rightLabel}</StyledToggleSwitchLabel>
      </StyledToggleSwitchSlider>
    </StyledToggleSwitch>
  );
};

export default ToggleSwitch;
