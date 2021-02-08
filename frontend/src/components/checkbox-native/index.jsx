import React from "react";
import { Tick } from "../../assets/icons";
import {
  StyledCheckbox,
  StyledCheckboxToggle,
  StyledCheckboxInput,
  StyledCheckboxToggleTick
} from "./StyledCheckboxNative";

const CheckboxNative = ({
  onChange,
  checked,
  name,
  disabled,
  label,
  className,
}) => {
  return (
    <StyledCheckbox className={className} disabled={disabled}>
      {label}
      <StyledCheckboxInput
        type="checkbox"
        name={name || label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledCheckboxToggle checked={checked} disabled={disabled}>
        {checked && <StyledCheckboxToggleTick alt="checkbox tick" src={Tick} />}
      </StyledCheckboxToggle>
    </StyledCheckbox>
  );
};

export default CheckboxNative;
