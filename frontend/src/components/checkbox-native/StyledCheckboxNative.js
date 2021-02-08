import styled from "styled-components";

// it's important to wrap the checkbox in a label element so it triggers the onchange event
// since the native checkbox element will be hidden
export const StyledCheckbox = styled.label`
  display: flex;
  width: 100%;
  font-size: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.highlight};

  ${({ disabled, theme }) =>
    disabled
      ? `
      color: ${theme.colors.disabled};
    `
      : ""}
`;

export const StyledCheckboxToggleTick = styled.img`
  width: 15px;
  height: 15px;
  filter: invert(23%) sepia(43%) saturate(3232%) hue-rotate(100deg)
    brightness(92%) contrast(104%);
  // visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
`;

export const StyledCheckboxToggle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 15px;
  height: 15px;
  margin-top: 1px;
  margin-left: 0.5rem;
  box-shadow: 0 1px 4px ${({ theme }) => theme.colors.shadow};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.primary};

  // if StyledCheckboxToggle is parent of StyledCheckboxInput
  :focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.highlight};
  }

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }

  // when native checkbox is focused, adds focus to the sibling StyledCheckboxToggle
  // (indicated by "&", which indicates the main component)
  /* {StyledCheckboxInput}:focus + & {
      outline: 2px solid ${({ theme }) => theme.colors.highlight};
  }*/

  ${({ disabled }) =>
    disabled
      ? `
      background-color: ${({ theme }) => theme.colors.disabled};
      opacity: 0.3;
      pointer-events: none;

      &:hover {  
        cursor: default;
      }
    `
      : ""}
`;

export const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;

  // when focus, adds a border to its sibling StyledCheckboxToggle
  :focus + ${StyledCheckboxToggle} {
    outline: 2px solid ${({ theme }) => theme.colors.highlight};
  }

  :focus:not(:focus-visible) + ${StyledCheckboxToggle} {
    outline: none;
  }
`;
