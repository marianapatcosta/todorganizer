import styled, { keyframes } from "styled-components";

const typeClass = (type, themeColors) => {
  const toastTypesClasses = {
    alert: themeColors.red,
    info: themeColors.white,
    success: themeColors.green,
    warning: themeColors.yellow,
  };
  return toastTypesClasses[type];
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledToast = styled.div`
  box-shadow: 0 2px 8px rgba(${({ theme }) => theme.colors.shadow}, 0.2);
  width: 85%;
  height: 50px;
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 10px;
  z-index: 2;
  display: flex;
  align-items: center;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  animation: ${fadeIn} 0.5s;
  -webkit-animation: ${fadeIn} 0.5s;
  background-color: ${({ type, theme }) => typeClass(type, theme.colors)};
`;

export const StyledToastMessage = styled.div`
  font-size: 95%;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  margin: 0 auto;
  text-align: center;
`;
