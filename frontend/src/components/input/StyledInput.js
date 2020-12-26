import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  margin: 15px 0;
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  display: block;
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.transparent};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 4px ${({ theme }) => theme.colors.shadow};
  box-sizing: border-box;
  padding: 5px 10px;
  position: relative;
  height: 30px;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.font};
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.primary} inset !important;
  }

  ${({ errorText, theme }) =>
    `border-color: ${errorText ? theme.colors.red : ""};
    `}
`;
export const StyledLabel = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.green};
  margin-bottom: 5px;
  margin-left: 5px;
  font-size: 95%;
`;

export const StyledInputError = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
  font-size: 90%;
  margin-top: 5px;
`;
