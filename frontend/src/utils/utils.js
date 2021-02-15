import { sha256 } from "js-sha256";
import { KEYBOARD_CODES } from "../constants";
const { SPACE_KEY, ENTER_KEY } = KEYBOARD_CODES;

export const isEventValid = (event) =>
  event.type === "click" ||
  event.which === SPACE_KEY ||
  event.which === ENTER_KEY;

export const encryptPassword = (password) =>
  sha256.create().update(password).hex();
