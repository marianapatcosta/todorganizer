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
  height: 8.75rem;
  margin-bottom: 0.3rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.26);
  border-radius: 0.375rem;
  padding: 0.625rem;
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
  margin: 0.625rem 0;
  height: 0.9rem;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 7.5rem;
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
  width: 0.75rem;
  height: 0.75rem;
  vertical-align: middle;
  position: absolute;
  bottom: 3.5rem;
  left: 35%;
  z-index: 10;
`;
