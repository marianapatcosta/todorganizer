import React from "react";
import {
  StyledTodoPlaceholder,
  StyledTodoPlaceholderItem,
  StyledTodoPlaceholderTitle,
  StyledTodoPlaceholderDescription,
  StyledTodoPlaceholderPriority,
} from "./StyledTodoPlaceholder";

const TodoPlaceholder = () => {
  return (
    <StyledTodoPlaceholder>
      <StyledTodoPlaceholderTitle />
      <StyledTodoPlaceholderDescription/>
      <StyledTodoPlaceholderItem>
      </StyledTodoPlaceholderItem>
      <StyledTodoPlaceholderPriority/>
      <StyledTodoPlaceholderItem/>
    </StyledTodoPlaceholder>
  );
};

export default TodoPlaceholder;
