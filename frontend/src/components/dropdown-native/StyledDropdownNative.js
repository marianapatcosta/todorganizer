import styled from "styled-components";
import { DownArrow } from "../../assets/icons";

export const StyledDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const StyledDropdown = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  :after {
    position: absolute;
    top: 50%;
    right: 0.8rem;
    content: "";
    margin-top: -0.15rem;
    pointer-events: none;
    border: 0.35rem solid ${({ theme }) => theme.colors.transparent};
    border-top: 0.35rem solid ${({ theme }) => theme.colors.highlight};
    transition: all 0.5s linear;

    ${({ isExpanded }) =>
      isExpanded
        ? `
          transform: rotate(180deg);
          top: 0.5rem;  
        `
        : ""}
  }
`;

export const StyledDropdownLabel = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.highlight};
  margin: 0 0.8rem 0.3rem 0.3rem;
  font-size: 95%;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ disabled, theme }) =>
    `  color: ${disabled ? theme.colors.disabled : ""};
    `}
`;

export const StyledDropdownHeader = styled.select`
  // reset of styles, including removing the default dropdown arrow
  appearance: none;
  border: none;
  margin: 0;
  width: 100%;
  font-family: inherit;
  cursor: inherit;
  line-height: inherit;
  /*   background: url(${DownArrow}) no-repeat;
  background-size: 1rem 1rem;
  background-position: 95%; */
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.063rem 0.25rem ${({ theme }) => theme.colors.shadow};
  padding: 0.3rem 2rem 0.3rem 0.8rem;
  font-size: 95%;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;

  ::-ms-expand {
    display: none;
  }

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: 0.125rem solid ${({ theme }) => theme.colors.highlight};
  }

  ${({ disabled, theme }) =>
    disabled
      ? `
    color: ${disabled ? theme.colors.disabled : ""};
    opacity: 0.75;
    pointer-events: none;
    &:hover {  
      cursor: default;
    }
    `
      : ""}
`;

export const StyledDropdownOption = styled.option`
  padding: 0.625rem 0.3rem;
  box-sizing: border-box;
  font-size: 90%;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary} !important;
  }

  :checked {
    font-weight: bold;
  }
`;
