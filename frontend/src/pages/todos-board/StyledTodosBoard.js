import styled from "styled-components";
import { Card, Export, Toast } from "../../components";

export const StyledTodosBoardWrapper = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
`;

export const StyledTodosBoard = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 18.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledTodosBoardItem = styled(Card)`
  margin: 1rem;

  @media (min-width: 1123px) {
    width: 12.5rem;
  }
`;

export const StyledTodosBoardItemTitle = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.highlight};
  margin-bottom: 0.625rem;
`;

export const StyledTodosBoardItemContent = styled.ul`
  height: 90%;
`;

export const StyledTodosBoardNoItems = styled.p`
  margin-top: 1.5rem;
  font-style: italic;
  line-height: 1.5rem;
`;

export const StyledTodosBoardToast = styled(Toast)`
  width: 70%;

  @media (min-width: 480px) {
    width: 30%;
  }
`;

export const StyledExport = styled(Export)`
  width: 6.25rem;
  align-self: flex-end;
  margin-bottom: 1rem;
`;
