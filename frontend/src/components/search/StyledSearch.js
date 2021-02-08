import styled from "styled-components";

export const StyledSearchWrapper = styled.div`
  margin: 15px 0;
  position: relative;
  width: 100%;
`;

export const StyledSearch = styled.input`
  display: block;
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 4px ${({ theme }) => theme.colors.shadow};
  box-sizing: border-box;
  padding: 5px 10px;
  position: relative;
  height: 30px;

  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.highlight};
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.font};
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.primary} inset !important;
  }

  ${({ errorText }) =>
    !!errorText &&
    `
  border-color: ${({ theme }) => theme.colors.red};
    `}
`;

export const StyledSearchIcon = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 8px;
  right: 5%;
  filter: invert(23%) sepia(43%) saturate(3232%) hue-rotate(100deg)
    brightness(92%) contrast(104%);
`;

export const StyledMoStyledSearchIconClear = styled.span`
  color: ${({ theme }) => theme.colors.highlight};
  position: absolute;
  width: 15px;
  height: 15px;
  top: 4px;
  right: 5%;
  :hover {
    cursor: pointer;
  }
`;