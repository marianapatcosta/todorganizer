import React from "react";
import { StyledEmoji } from "./StyledEmoji";

const Emoji = ({ label, emoji }) => (
  <StyledEmoji
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {emoji}
  </StyledEmoji>
);

export default Emoji;
