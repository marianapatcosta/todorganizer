import styled from "styled-components";
import { Card, Export, Toast } from "../../components";

export const StyledTodosBoardWrapper = styled.div`
  display: flex;
  margin: 15px;
  flex-direction: column;
`;

export const StyledTodosBoard = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 300px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledTodosBoardItem = styled(Card)`
  margin: 15px;

  @media (min-width: 1123px) {
    width: 200px;
  }
`;

export const StyledTodosBoardItemTitle = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.green};
  margin-bottom: 10px;
`;

export const StyledTodosBoardItemContent = styled.ul`
  height: 90%;
`;

export const StyledTodosBoardNoItems = styled.p`
  margin-top: 25px;
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
  width: 100px;
  align-self: flex-end;
  margin-bottom: 15px;
`;
