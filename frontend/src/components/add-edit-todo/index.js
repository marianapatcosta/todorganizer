import React, { useEffect, useState, Fragment } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import { Checkbox, Dropdown, Input, Textarea, Upload } from "../";
import {
  errorMessages,
  fileTypes,
  priorities,
  statuses,
} from "../../constants";
import {
  StyledAddEditTodo,
  StyledForm,
  StyledFormTitle,
  StyledFormTitleText,
  StyledFormItems,
  StyledFormItem,
  StyledFormDropdown,
  StyledFormButton,
  StyledFormCancel,
} from "./StyledAddEditTodo";

const AddEditTodo = ({
  todoToEdit,
  onAddEditTodo,
  onCancel,
  onUploadError,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(priorities.LOW);
  const [status, setStatus] = useState(statuses.BACKLOG);
  const [is_completed, setIsCompleted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (todoToEdit) {
      setErrors({});
      setTitle(todoToEdit.title);
      setDescription(todoToEdit.description);
      setPriority(todoToEdit.priority);
      setStatus(todoToEdit.status);
      setIsCompleted(todoToEdit.is_completed);
    }
  }, [todoToEdit]);

  const validateForm = () => {
    !title &&
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: errorMessages.TITLE,
      }));
    !description &&
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: errorMessages.DESCRIPTION,
      }));
    return !!title && !!description;
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority(priorities.LOW);
    setStatus(statuses.BACKLOG);
    setIsCompleted(false);
    setErrors({});
  };

  const handleFormFieldChange = (value, setter) => setter(value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isFormValid = validateForm();
    if (!isFormValid) return;

    onAddEditTodo({
      title,
      description,
      priority: priority,
      status: status,
      is_completed,
    });
    resetForm();
  };

  const onCancelAddEdit = () => {
    resetForm();
    onCancel();
  };

  const onFileUpload = async (event) => {
    const uploadedFile = event.target.files[0];
    try {
      const response = await ExcelRenderer(uploadedFile);
      const todos = excelToJson(response.rows);
      const validTodos = todos.filter(isTodoValid);
      const message =
        validTodos.length < todos.length
          ? "Some ToDos had invalid data and could not be created"
          : undefined;
      !!validTodos.length && onAddEditTodo(validTodos, message);
    } catch (error) {
      onUploadError(
        "It was not possible to upload your data. Please if all the fields required are fulfilled."
      );
    }
  };

  const excelToJson = (data) => {
    const columnTitles = data[0];
    const rows = data.slice(1);
    return rows.map((row) =>
      row.reduce(
        (acc, data, index) => ({ ...acc, [columnTitles[index]]: data }),
        {}
      )
    );
  };

  const isTodoValid = (todo) =>
    todo.title &&
    todo.description &&
    Object.values(priorities).includes(todo.priority) &&
    Object.values(statuses).includes(todo.status) &&
    "is_completed" in todo;

  return (
    <Fragment>
      <StyledAddEditTodo>
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormTitle>
            <StyledFormTitleText>
              {" "}
              {!!todoToEdit ? "Edit ToDo" : "Add new ToDo"}
            </StyledFormTitleText>
            <div>
              <Upload
                label="Upload"
                fileTypes={`${fileTypes.CSV}, ${fileTypes.XLS}, ${fileTypes.XLSX}`}
                onUpload={onFileUpload}
              />
            </div>
            {(!!title || !!description) && (
              <StyledFormCancel tabIndex="0" onClick={onCancelAddEdit}>
                Cancel
              </StyledFormCancel>
            )}
          </StyledFormTitle>
          <StyledFormItem>
            <Input
              id="title"
              label={"Title"}
              isRequired={true}
              value={title}
              onChange={(event) =>
                handleFormFieldChange(event.target.value, setTitle)
              }
              errorText={errors.title}
            />
          </StyledFormItem>
          <StyledFormItem>
            <Textarea
              id="description"
              label={"Description"}
              isRequired={true}
              value={description}
              onChange={(event) =>
                handleFormFieldChange(event.target.value, setDescription)
              }
              errorText={errors.description}
            />
          </StyledFormItem>
          <StyledFormItems>
            <StyledFormItem>
              <StyledFormDropdown
                options={Object.values(priorities)}
                selectedOption={priority}
                label={"Priority"}
                onChooseOption={(chosenItem) =>
                  handleFormFieldChange(chosenItem, setPriority)
                }
              />
            </StyledFormItem>
            <StyledFormItem>
              <Dropdown
                options={Object.values(statuses)}
                selectedOption={status}
                label={"Status"}
                onChooseOption={(chosenItem) =>
                  handleFormFieldChange(chosenItem, setStatus)
                }
              />
            </StyledFormItem>
          </StyledFormItems>
          <StyledFormItem>
            <Checkbox
              onChange={() => setIsCompleted((prevIsCompleted) => !prevIsCompleted)}
              // native checkbox
              // onChange={(event) => setIsCompleted(event.target.checked)}
              checked={is_completed}
              label={"is completed?"}
            />
          </StyledFormItem>
          <StyledFormButton
            type="submit"
            label={"Save"}
            large={true}
          ></StyledFormButton>
        </StyledForm>
      </StyledAddEditTodo>
    </Fragment>
  );
};

export default AddEditTodo;
