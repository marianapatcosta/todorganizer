import styled from "styled-components";

export const StyledCheckbox = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledCheckboxToggle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 15px;
  height: 15px;
  margin-top: 1px;
  box-shadow: 0 1px 4px ${({theme}) => theme.colors.shadow};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-left: 15px;

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
  width: 15px;
  height: 15px;
  filter: invert(23%) sepia(43%) saturate(3232%) hue-rotate(100deg) brightness(92%) contrast(104%);
`;

export const StyledCheckboxLabel = styled.div`
  font-size: 95%;
  margin-left: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.green};

  ${({ disabled }) =>
    disabled ?
    `
      color: ${({ theme }) => theme.colors.disabled};
    ` : ''}
`;
