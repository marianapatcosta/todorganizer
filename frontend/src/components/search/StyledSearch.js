import styled from "styled-components";

export const StyledSearchWrapper = styled.div`
  margin: 1rem 0;
  position: relative;
  width: 100%;
`;

export const StyledSearch = styled.input`
  display: block;
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.063rem 0.25rem ${({ theme }) => theme.colors.shadow};
  box-sizing: border-box;
  padding: 0.3rem 0.625rem;
  position: relative;
  height: 2rem;
  :focus {
    outline: 0.125rem solid ${({ theme }) => theme.colors.highlight};
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.font};
    -webkit-box-shadow: 0 0 0 2rem ${({ theme }) => theme.colors.primary} inset !important;
  }

  ${({ errorText }) =>
    !!errorText &&
    `
  border-color: ${({ theme }) => theme.colors.red};
    `}
`;

export const StyledSearchIcon = styled.img`
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 0.5rem;
  right: 5%;
  filter: invert(23%) sepia(43%) saturate(3232%) hue-rotate(100deg)
    brightness(92%) contrast(104%);
`;

export const StyledMoStyledSearchIconClear = styled.span`
  color: ${({ theme }) => theme.colors.highlight};
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 0.25rem;
  right: 5%;
  :hover {
    cursor: pointer;
  }
`;