import React, { useState, Fragment } from "react";
import {
  StyledTodo,
  StyledTodoItem,
  StyledTodoTitle,
  StyledTodoDescription,
  StyledTodoPriority,
  StyledTodoActions,
  StyledTodoActionsIcon,
  StyledTodoCheckbox,
} from "./StyledTodo";
import { Delete, Edit } from "../../assets/icons";

const Todo = ({
  todo,
  isTodoBoard = false,
  onEditTodo,
  onDeleteTodo,
  onDragStart,
}) => {
  const [showActions, setShowActions] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = (e) => {
    setIsDragging(true);
    onDragStart(e);
  };

  return (
    <StyledTodo
      draggable={isTodoBoard}
      onDragStart={dragStart}
      isTodoBoard={isTodoBoard}
      isDragging={isDragging}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <StyledTodoTitle>{todo.title} </StyledTodoTitle>
      <StyledTodoDescription>{todo.description} </StyledTodoDescription>
      <StyledTodoItem>
        priority:{" "}
        <StyledTodoPriority priority={todo.priority}>&nbsp;</StyledTodoPriority>{" "}
      </StyledTodoItem>
      {isTodoBoard && (
        <StyledTodoItem>{`status: ${todo.status}`} </StyledTodoItem>
      )}
      <StyledTodoCheckbox
        checked={todo.is_completed}
        label={"is completed?"}
        disabled={true}
      />
      {!isTodoBoard && (
        <StyledTodoActions showActions={showActions}>
          {showActions && (
            <Fragment>
              <StyledTodoActionsIcon
                src={Edit}
                alt="Edit icon"
                onClick={onEditTodo}
              />
              <StyledTodoActionsIcon
                src={Delete}
                alt="Delete icon"
                onClick={onDeleteTodo}
              />
            </Fragment>
          )}
        </StyledTodoActions>
      )}
    </StyledTodo>
  );
};

export default Todo;
