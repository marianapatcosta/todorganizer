import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(460px);
  }
`;

export const StyledTodoPlaceholder = styled.li`
  position: relative;
  list-style: none;
  width: 100%;
  height: 140px;
  margin-bottom: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.secondary};
  font-size: 90%;
  box-sizing: border-box;
`;

export const StyledTodoPlaceholderItem = styled.div`
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.disabled};
  opacity: 0.5;
  width: 30%;
  margin: 10px 0;
  height: 0.9rem;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 100%;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.disabled}, #ddd, ${({ theme }) => theme.colors.disabled});
    animation: ${loading} 2s infinite linear;
  }
`;

export const StyledTodoPlaceholderTitle = styled(StyledTodoPlaceholderItem)`
  width: 60%;
`;

export const StyledTodoPlaceholderDescription = styled(StyledTodoPlaceholderItem)`
  width: 100%;
`;

export const StyledTodoPlaceholderPriority = styled.div`
  display: inline-block;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.disabled};
  width: 12px;
  height: 12px;
  vertical-align: middle;
  position: absolute;
  bottom: 57px;
  left: 35%;
  z-index: 10;
`;
