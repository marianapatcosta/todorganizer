import { KEYBOARD_CODES } from "./constants";
const { SPACE_KEY, ENTER_KEY } = KEYBOARD_CODES;

export const isEventValid = (event) =>
  event.type === "click" ||
  event.which === SPACE_KEY ||
  event.which === ENTER_KEY;
