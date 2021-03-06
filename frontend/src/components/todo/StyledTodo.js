import styled from "styled-components";

const getPriorityColor = (priority, themeColors) => {
  const priorities = {
    low: themeColors.green,
    medium: themeColors.yellow,
    high: themeColors.red,
  };

  return priorities[priority] || themeColors.grey;
};

export const StyledTodo = styled.li`
  position: relative;
  list-style: none;
  width: 95%;
  margin: 0 auto 0.625rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.26);
  border-radius: 0.375rem;
  padding: 0.6rem;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 90%;
  box-sizing: border-box;

  ${({ isTodoBoard }) =>
    isTodoBoard
      ? `
      :hover {
        cursor: move;
        cursor: grab;
        cursor: -moz-grab;
        cursor: -webkit-grab;
      }
    `
      : ""}
`;

export const StyledTodoContent = styled.div`
  display: flex;
`;

export const StyledTodoItems = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const StyledTodoItem = styled.div`
  padding-bottom: 0.3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledTodoTitle = styled(StyledTodoItem)`
  font-weight: 700;
`;

export const StyledTodoDescription = styled.div`
  /* overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical ; */
  overflow: hidden;
  position: relative;
  //max-height = line-height (1.2) * lines max number (3)
  max-height: 3.5rem;
  text-align: left;
  padding-right: 1rem;
  padding-bottom: 0.3rem;

  :before {
    content: "...";
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
  }

  :after {
    content: "";
    position: absolute;
    right: 0.3rem;
    width: 0.625rem;
    height: 0.625rem;
    margin-top: 0.625rem;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledTodoPriority = styled.div`
  display: inline-block;
  border-radius: 50%;
  background-color: ${({ theme, priority }) =>
    getPriorityColor(priority, theme.colors)};
  width: 0.75rem;
  height: 0.75rem;
  vertical-align: middle;
  margin-left: 0.3rem;
`;

export const StyledTodoActions = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.26);
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;
  transition: width 0.2s linear;

  ${({ showActions }) =>
    showActions
      ? `
      width: 20%;
    `
      : ""}
`;

export const StyledTodoActionsIcon = styled.img`
  width: 1rem;
  height: 1rem;
  padding: 0.625rem 0;
  filter: invert(23%) sepia(43%) saturate(3232%) hue-rotate(100deg)
    brightness(92%) contrast(104%);

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`;

export const StyledTodoItemCompleted = styled.span`
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 700;
  font-style: italic;
  margin-right: 0.5rem;
  text-align: right;
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  padding-bottom: 0.3rem;
`;
