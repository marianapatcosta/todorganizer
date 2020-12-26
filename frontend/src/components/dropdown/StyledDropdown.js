import styled, { keyframes } from "styled-components";

const rotateMenu = keyframes`
  0% {
    transform: rotateX(-90deg);
  }
  70% {
    transform: rotateX(20deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

export const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const StyledDropdownLabel = styled.div`
  display: block;
  color: ${({ theme }) => theme.colors.green};
  margin: 0 10px 5px 5px;
  font-size: 95%;

  ${({ disabled, theme }) =>
     `      color: ${disabled
      ? theme.colors.disabled : ""};
    `}
`;

export const StyledDropdownHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 4px ${({ theme }) => theme.colors.shadow};
  display: flex;
  flex: auto;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  font-size: 95%;
  width: auto;
  position: relative;
  
  :hover {
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled
      ? `
    opacity: 0.3;
    pointer-events: none;
    &:hover {  
      cursor: default;
    }
    `
      : ""}
`;

export const StyledDropdownHeaderText = styled.div`
  margin-right: 5px; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`;

export const StyledDropdownHeaderArrow = styled.img`
  width: 15px;
  height: 15px;
  filter: invert(23%) sepia(43%) saturate(3232%) hue-rotate(100deg)
    brightness(92%) contrast(104%);
  transition: transform 0.5s linear;

  ${({ isExpanded }) =>
    isExpanded
      ? `
      transform: rotate(180deg);
    `
      : ""}
`;

export const StyledDropdownOptions = styled.ul`
  background-color: ${({ theme }) => theme.colors.primary};
  border-top: none;
  box-sizing: border-box;
  box-shadow: 0 1px 4px ${({ theme }) => theme.colors.shadow};
  width: 100%;
  list-style: none;
  max-height: 150px;
  overflow: auto;
  animation: ${rotateMenu} 700ms ease-in forwards;
  transform-origin: top center;
  -webkit-animation: ${rotateMenu} 700ms ease-in forwards;
  position: absolute;
  z-index: 1;
  top: 30px;
  left: 0;
  font-size: 90%;
`;

export const StyledDropdownOption = styled.li`
  padding: 10px 5px;
  box-sizing: border-box;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  ${({ isActive }) =>
    isActive
      ? `
      font-weight: bold;
    `
      : ""}
`;
