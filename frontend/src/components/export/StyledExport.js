import styled, { keyframes } from "styled-components";
import { Button } from "..";

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

export const StyledExportWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledExport = styled(Button)`
  width: 100%;
  padding: 5px 10px;
  min-width: auto;
`;

export const StyledExportOptions = styled.ul`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-top: none;
  box-sizing: border-box;
  box-shadow: 0 1px 4px ${({ theme }) => theme.colors.shadow};
  width: 100%;
  list-style: none;
  overflow: auto;
  animation: ${rotateMenu} 700ms ease-in forwards;
  -webkit-animation: ${rotateMenu} 700ms ease-in forwards;
  transform-origin: top center;
  position: absolute;
  z-index: 1;
  top: 30px;
  left: 0;
  font-size: 90%;
  font-weight: 400;
`;

export const StyledExportOption = styled.li`
  padding: 10px;
  box-sizing: border-box;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

