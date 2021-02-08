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
  box-shadow: 0 0.125rem 0.5rem rgba(${({ theme }) => theme.colors.shadow}, 0.2);
  width: 85%;
  height: 3.125rem;
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0.635rem;
  z-index: 2;
  display: flex;
  align-items: center;
  border-radius: 0.2rem;
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
