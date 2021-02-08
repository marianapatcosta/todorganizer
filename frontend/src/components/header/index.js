import React from "react";
import { Emoji } from "../";
import {
  StyledHeader,
  StyledHeaderTitle,
  StyledHeaderToggle,
} from "./StyledHeader";

const Header = ({ title, isDarkTheme, toggleThemeMode }) => {
  return (
    <StyledHeader>
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
      <StyledHeaderToggle
        label="theme"
        leftLabel={<Emoji label="sun" emoji="☀️" />}
        rightLabel={<Emoji label="moon" emoji="🌙" />}
        checked={isDarkTheme}
        onChange={toggleThemeMode}
      />
    </StyledHeader>
  );
};

export default Header;
