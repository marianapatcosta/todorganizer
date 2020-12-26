import React from "react";
import { StyledTextareaWrapper, StyledTextarea, StyledLabel,StyledTextareaError } from "./StyledTextarea";

const Textarea = ({
  id,
  label,
  maxLength,
  value,
  placeholder,
  errorText,
  rows, 
  onChange,
  onBlur
}) => {
  return (
    <StyledTextareaWrapper>
      <StyledLabel htmlFor={id}>
        {label}
      </StyledLabel>
      <StyledTextarea
        id={id}
        errorText={errorText}
        maxLength={maxLength || 500}
        rows={rows || "5" }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        >
      </StyledTextarea>
      {!!errorText && <StyledTextareaError>{errorText}</StyledTextareaError>}
    </StyledTextareaWrapper>
  );
};

export default Textarea;
