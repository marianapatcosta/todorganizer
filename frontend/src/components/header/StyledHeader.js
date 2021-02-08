import styled from "styled-components";
import ToggleSwitch from "../toggle-switch";

export const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.secondary};
  box-shadow: 0 1px 8px ${({theme}) => theme.colors.shadow};
  z-index: 10;
  padding: 0 15px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0 50px;
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
