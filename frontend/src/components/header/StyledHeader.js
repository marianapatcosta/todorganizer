import styled from "styled-components";
import ToggleSwitch from "../toggle-switch";

export const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.secondary};
  box-shadow: 0 0.063rem 0.5rem ${({theme}) => theme.colors.shadow};
  z-index: 10;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0 3.125rem;
  }
`;

export const StyledHeaderTitle = styled.h1`
  font-size: 180%;
  color: ${({theme}) => theme.colors.highlight};
  font-style: italic;
  text-align: center;
`;

export const StyledHeaderToggle = styled(ToggleSwitch)`
  margin-right: 5%;

  @media (min-width: 768px) {
    margin-right: 0;
  }
  `;
