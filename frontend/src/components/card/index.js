import React, { forwardRef } from "react";
import { StyledCard } from "./StyledCard";

const Card = forwardRef(({ children, className, id }, ref) => {
  return (
    <StyledCard id={id} className={className} ref={ref}>
      {children}
    </StyledCard>
  );
});

export default Card;
