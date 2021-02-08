import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.625rem 1.25rem;
  border: 0.063rem solid ${({ theme }) => theme.colors.highlight};
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.highlight};
  cursor: pointer;
  font-size: 90%;
  min-width: 6.25rem;

  :hover {
    opacity: 0.5;
  }

  :disabled,
  :hover:disabled,
  :active:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const StyledButtonLarge = styled(StyledButton)`
  width: 100%;
`;
