import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.highlight};
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.highlight};
  cursor: pointer;
  font-size: 90%;
  min-width: 100px;

  :hover {
    opacity: 0.5;
  }

  :disabled,
  :hover:disabled,
  :active:disabled {
    background: ${({ theme }) => theme.colors.disabled};
    color: #ccc;
    border-color: #ccc;
    pointer-events: none;
  }
`;

export const StyledButtonLarge = styled(StyledButton)`
  width: 100%;
`;
