import styled from "styled-components";

export const StyledTab = styled.li`
  min-width: 3.125rem;
  color: ${({ theme }) => theme.colors.highlight};
  padding: 0.3rem 0.625rem;
  position: relative;

  :hover {
    cursor: pointer;
  }

  ${({ isActive, theme }) =>
    isActive
      ? `font-weight: 700; 
        background-color: ${theme.colors.primary};
        box-shadow: 0 0 0.125rem ${theme.colors.shadow};
        border-top-left-radius: 0.625rem;
        border-top-right-radius: 0.625rem;
       /*  border: solid ${theme.colors.secondary};
        border-width: 0.063rem 0.063rem 0 0.063rem;
        margin-bottom: -0.2rem; */

        :before {
          content: "";
          position: absolute;
          width: 100%;
          height: 0.3rem;
          bottom: -0.3rem;
          left: 0;
          background-color: ${theme.colors.primary};
        }
      `
      : ""}
`;
