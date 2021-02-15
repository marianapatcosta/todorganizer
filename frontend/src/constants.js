export const priorities = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

export const statuses = {
  BACKLOG: "backlog",
  READY: "ready to do",
  ON_GOING: "on going",
  REVIEW: "review",
  CLOSED: "closed",
};

export const errorMessages = {
  TITLE: "ToDo title cannot be empty!",
  DESCRIPTION: "ToDo description cannot be empty!",
  USERNAME: "The username is invalid!",
  PASSWORD: (charNum) => `The password should have at least ${charNum} characters.`,
};

export const toastTypes = {
  ALERT: "alert",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
};

export const orderOptions = {
  ASC: "asc",
  DESC: "desc",
};

export const orderByOptions = {
  TITLE: { key: "title", label: "title" },
  DESCRIPTION: { key: "description", label: "description" },
  PRIORITY: { key: "priority", label: "priority" },
  STATUS: { key: "status", label: "status" },
  COMPLETED: { key: "is_completed", label: "is completed" },
};

export const fileTypes = {
  CSV: ".csv",
  JPEG: ".jpeg",
  PNG: ".png",
  SVG: ".svg",
  PDF: ".pdf",
  XLS: ".xls",
  XLSX: ".xlsx",
};

export const documentOrientation = {
  LANDSCAPE: "landscape",
  VERTICAL: "vertical",
};

export const documentFormat = {
  A4: "A4",
  A3: "A3",
  FourByTwo: [4, 2],
};

export const priorityConverter = {
  1: priorities.LOW,
  2: priorities.MEDIUM,
  3: priorities.HIGH,
};

export const statusConverter = {
  1: statuses.BACKLOG,
  2: statuses.READY,
  3: statuses.ON_GOING,
  4: statuses.REVIEW,
  5: statuses.CLOSED,
};

export const KEYBOARD_CODES = {
  ENTER_KEY: 13,
  ESCAPE_KEY: 27,
  SPACE_KEY: 32,
  LEFT_ARROW_KEY: 37,
  UP_ARROW_KEY: 38,
  RIGHT_ARROW_KEY: 39,
  DOWN_ARROW_KEY: 40,
};

export const initialInputState = {
  value: "",
  isRequired: true,
  isValid: false,
  isTouched: false,
};
