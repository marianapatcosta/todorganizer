import styled from "styled-components";

export const StyledTab = styled.li`
  min-width: 50px;
  color: ${({ theme }) => theme.colors.highlight};
  padding: 5px 10px;
  position: relative;

  :hover {
    cursor: pointer;
  }

  ${({ isActive, theme }) =>
    isActive
      ? `font-weight: 700; 
        background-color: ${theme.colors.primary};
        box-shadow: 0 0 2px ${theme.colors.shadow};
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
       /*  border: solid ${theme.colors.secondary};
        border-width: 1px 1px 0 1px
        margin-bottom: -3px; */

        :before {
          content: "";
          position: absolute;
          width: 100%;
          height: 5px;
          bottom: -5px;
          left: 0px;
          background-color: ${theme.colors.primary};
        }
      `
      : ""}
`;
