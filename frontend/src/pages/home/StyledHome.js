import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHomeText = styled.h1`
  color: ${({ theme }) => theme.colors.highlight};
  vertical-align: center;
  margin-top: 20%;
`;
