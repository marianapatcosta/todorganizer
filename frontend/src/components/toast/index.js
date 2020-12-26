import React, { useEffect } from "react";
import { StyledToast, StyledToastMessage } from "./StyledToast";

const Toast = ({ message, type, className, onClean }) => {
  useEffect(() => {
    let timer;
    if (message) timer = setTimeout(() => onClean({}), 2000);
    return () => clearTimeout(timer);
  }, [message, onClean]);

  return (
    <StyledToast className={className} type={type}>
      <StyledToastMessage>{message}</StyledToastMessage>
    </StyledToast>
  );
};

export default Toast;
