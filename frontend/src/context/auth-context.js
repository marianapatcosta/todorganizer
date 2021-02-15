import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  isLoggingOut: false,
  userId: null,
  authToken: null,
  login: () => {},
  logout: () => {},
});
