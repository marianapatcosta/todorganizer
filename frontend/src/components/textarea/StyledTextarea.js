import styled from "styled-components";

export const StyledTextareaWrapper = styled.div`
  margin: 15px 0;
  position: relative;
  width: 100%;
`;

export const StyledTextarea = styled.textarea`
  display: block;
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 4px ${({theme}) => theme.colors.shadow};
  box-sizing: border-box;
  padding: 5px 10px;
  position: relative;
  resize: none;

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

export const StyledTextareaError = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
  font-size: 90%;
  margin-top: 5px;
`;
