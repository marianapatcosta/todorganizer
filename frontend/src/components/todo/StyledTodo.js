import styled from "styled-components";
import { Checkbox } from "../index.js";

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
  width: 100%;
  margin-bottom: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.secondary};
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

      :draggable {
        backgroundColor = 'yellow';
      }
    `
      : ""}

${({ isDragging }) =>
    isDragging
      ? `
    
color: "red";
     
        background: 'yellow';
      
    `
      : ""}
`;

export const StyledTodoItem = styled.div`
  padding-bottom: 5px;
`;

export const StyledTodoTitle = styled(StyledTodoItem)`
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledTodoDescription = styled(StyledTodoItem)`
  /* overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical ; */
  overflow: hidden;
  position: relative;
  //max-height = line-height (1.2) * lines max number (3)
  max-height: 3.6em;
  text-align: justify;
  padding-right: 1em;

  :before {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
  }

  :after {
    content: "";
    position: absolute;
    right: 0;
    width: 10px;
    height: 10px;
    margin-top: 10px;
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const StyledTodoPriority = styled.div`
  display: inline-block;
  border-radius: 50%;
  background-color: ${({ theme, priority }) =>
    getPriorityColor(priority, theme.colors)};
  width: 12px;
  height: 12px;
  vertical-align: middle;
`;

export const StyledTodoActions = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;
  transition: all 0.2s linear;

  ${({ showActions }) =>
    showActions
      ? `
      width: 20%;
    `
      : ""}
`;

export const StyledTodoActionsIcon = styled.img`
  width: 17px;
  height: 17px;
  padding: 10px 0;
  filter: invert(23%) sepia(43%) saturate(3232%) hue-rotate(100deg)
    brightness(92%) contrast(104%);

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`;

export const StyledTodoCheckbox = styled(Checkbox)`
  margin-left: 0;
  color: ${({ theme }) => theme.colors.font};
`;
