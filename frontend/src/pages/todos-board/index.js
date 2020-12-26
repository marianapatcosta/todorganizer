import React, { useEffect, useRef, useState } from "react";
import { Todo, TodoPlaceholder } from "../../components";
import {
  statuses,
  toastTypes,
  fileTypes,
  documentOrientation,
  documentFormat,
  priorityConverter,
  statusConverter,
} from "../../constants";
import {
  StyledTodosBoardWrapper,
  StyledTodosBoard,
  StyledTodosBoardItem,
  StyledTodosBoardItemTitle,
  StyledTodosBoardItemContent,
  StyledTodosBoardNoItems,
  StyledTodosBoardToast,
  StyledExport,
} from "./StyledTodosBoard";

const TodosBoard = () => {
  const [todos, setTodos] = useState([]);
  const [draggedTodo, setDraggedTodo] = useState();
  const [toastData, setToastData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const todosBoardRef = useRef();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/todos`
      );
      const responseData = await response.json();
      setTodos(responseData.map(todo => ({...todo, priority: priorityConverter[todo.priority], status: statusConverter[todo.status]})));
    } catch (error) {
      setToastData({
        message: "It was not possible to load your ToDos.",
        type: toastTypes.ALERT,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onEditTodo = async (newTodoStatus) => {
    if (!newTodoStatus || newTodoStatus === draggedTodo.status) return;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/todos/${draggedTodo.id}/`,
        {
          method: "PATCH",
          body: JSON.stringify({
            ...draggedTodo,
            status: newTodoStatus,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }
      setToastData({
        message: `ToDo ${draggedTodo.title} was updated.`,
        type: toastTypes.SUCCESS,
      });
      await fetchTodos();
    } catch (error) {
      setToastData({
        message: `It was not possible to update ToDo ${draggedTodo.title}.`,
        type: toastTypes.ALERT,
      });
    } finally {
      setDraggedTodo();
    }
  };

  const getFilteredTodos = (filter) =>
    todos.filter(({ status }) => status === filter);

  const onDragOver = (e) => e.preventDefault();

  const onDrop = (e) => {
    e.preventDefault();
    const targetStatusId = getTargetStatusId(e.target);
    const newTodoStatus = targetStatusId && targetStatusId.split("-").join(" ");
    onEditTodo(newTodoStatus);
  };

  const onDragStart = (e, todo) => setDraggedTodo(todo);

  const getTargetStatusId = (element) => {
    const statusIds = Object.values(statuses).map(
      (status) => `#${status.split(" ").join("-")}`
    );

    // polyfill for browsers that do not support Element.matches() or Element.matchesSelector() but support document.querySelectorAll()
    if (!Element.prototype.matches) {
      Element.prototype.matches =
          Element.prototype.matchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector ||
          Element.prototype.webkitMatchesSelector ||
          function(s) {
              const matches = (this.document || this.ownerDocument).querySelectorAll(s),
                  i = matches.length;
              while (--i >= 0 && matches.item(i) !== this) {}
              return i > -1;
          };
  }

    // in for loop: 1st, no need to set a variable; 2nd, check if el exists and is not document el; 3rd, each loop el is
    // assigned to current element's parent, climbing up the DOM
    for (; element && element !== document; element = element.parentNode) {
      if (element.matches(statusIds.join())) return element.id;
    }
    return null;
  };

  const onExportError = (message) => {
    setToastData({
      message,
      type: toastTypes.ALERT,
    });
  };

  const renderTodos = () => {
    if (isLoading) {
      return new Array(5)
        .fill()
        .map((item, index) => <TodoPlaceholder key={index * Math.random()} />);
    }
    return !!todos.length ? (
      Object.values(statuses).map((status, statusIndex) => (
        <StyledTodosBoardItem
          id={status.split(" ").join("-")}
          key={statusIndex * Math.random()}
        >
          <StyledTodosBoardItemTitle>
            {" "}
            {`${status[0].toUpperCase()}${status.substring(1)}`}
          </StyledTodosBoardItemTitle>
          <StyledTodosBoardItemContent onDragOver={onDragOver} onDrop={onDrop}>
            {!!getFilteredTodos(status).length ? (
              getFilteredTodos(status).map((todo, todoIndex) => (
                <Todo
                  key={todoIndex * Math.random()}
                  todo={todo}
                  isTodoBoard={true}
                  onDragStart={(event) => onDragStart(event, todo)}
                />
              ))
            ) : (
              <StyledTodosBoardNoItems>{`No ToDos to display.`}</StyledTodosBoardNoItems>
            )}
          </StyledTodosBoardItemContent>
        </StyledTodosBoardItem>
      ))
    ) : (
      <StyledTodosBoardNoItems>{`No ToDos to display.`}</StyledTodosBoardNoItems>
    );
  };

  return (
    <StyledTodosBoardWrapper>
      <StyledExport
        label="Export"
        exportOptions={`${fileTypes.CSV}, ${fileTypes.PDF}, ${fileTypes.JPEG}`}
        elementRef={todosBoardRef}
        csvData={todos}
        fileName={"my-todos"}
        pdfOrientation={documentOrientation.LANDSCAPE}
        pdfFormat={documentFormat.A3}
        onError={onExportError}
      />
      <StyledTodosBoard ref={todosBoardRef}>
        {renderTodos()}
        {toastData.message && (
          <StyledTodosBoardToast {...toastData} onClean={setToastData} />
        )}
      </StyledTodosBoard>
    </StyledTodosBoardWrapper>
  );
};

export default TodosBoard;
