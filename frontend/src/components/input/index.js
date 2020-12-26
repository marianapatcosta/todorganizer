import React from "react";
import { StyledInputWrapper, StyledInput, StyledLabel,StyledInputError } from "./StyledInput";

const Input = ({
  id,
  label,
  type,
  maxLength,
  value,
  placeholder,
  errorText,
  onChange,
  onBlur
}) => {
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={id}>
        {label}
      </StyledLabel>
      <StyledInput
        id={id}
        errorText={errorText}
        type={type || "text"}
        maxLength={maxLength || 150}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        >
      </StyledInput>
      {!!errorText && <StyledInputError>{errorText}</StyledInputError>}
    </StyledInputWrapper>
  );
};

export default Input;
