import styled from "styled-components";

export const StyledCard = styled.div`
  box-shadow: 0 2px 8px ${({theme}) => theme.colors.shadow};
  border-radius: 6px;
  padding: 30px;
  overflow: hidden;
  background-color:  ${({theme}) => theme.colors.secondary};
  ${props => props.addCSS};
`;
