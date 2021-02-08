import styled from "styled-components";

export const StyledCheckbox = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledCheckboxToggle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 1rem;
  height: 1rem;
  margin-top: 0.063rem;
  box-shadow: 0 0.063rem 0.25rem ${({theme}) => theme.colors.shadow};
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.primary};

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }

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

export const StyledCheckboxToggleTick = styled.img`
  width: 1rem;
  height: 1rem;
  filter: invert(23%) sepia(43%) saturate(3232%) hue-rotate(100deg) brightness(92%) contrast(104%);
`;

export const StyledCheckboxLabel = styled.label`
  font-size: 95%;
  margin-left: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.highlight};

  ${({ disabled }) =>
    disabled ?
    `
      color: ${({ theme }) => theme.colors.disabled};
    ` : ''}
`;
