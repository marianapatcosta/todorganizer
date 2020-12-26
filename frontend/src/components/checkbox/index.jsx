import React from "react";
import { Tick } from "../../assets/icons";
import {
  StyledCheckbox,
  StyledCheckboxToggle,
  StyledCheckboxToggleTick,
  StyledCheckboxLabel,
} from "./StyledCheckbox";

const Checkbox = ({ onClick, checked, disabled, label, className }) => {
  return (
    <StyledCheckbox>
      <StyledCheckboxLabel
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </StyledCheckboxLabel>
      <StyledCheckboxToggle disabled={disabled} onClick={onClick}>
        {checked && (
          <StyledCheckboxToggleTick
            alt="checkbox tick"
            src={Tick}
          ></StyledCheckboxToggleTick>
        )}
      </StyledCheckboxToggle>
    </StyledCheckbox>
  );
};

export default Checkbox;
