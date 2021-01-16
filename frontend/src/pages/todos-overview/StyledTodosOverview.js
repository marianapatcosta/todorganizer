import styled from "styled-components";
import { Card, Dropdown, Export, Search } from "../../components";

export const StyledTodosOverview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 15px;

  @media (min-width: 768px) {
    width: 90%;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledTodosList = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 50px;
  box-sizing: border-box;
  height: 517px;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-top: 0;
    width: 30%;
  }
`;

export const StyledAddTodo = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 55%;
    box-sizing: border-box;
  }
`;

export const StyledTodosListHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTodosListHeaderTitle = styled.div`
  font-size: 110%;
  font-weight: 700;
  color: green;
  display: flex;
  align-items: center;
`;

export const StyledTodosListHeaderBottom = styled(Card)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 5px;
  overflow: visible;
`;

export const StyledTodosListHeaderIcon = styled.img`
  width: 17px;
  height: 17px;
  padding: 10px 0;
  margin-left: 10px;
  filter: invert(23%) sepia(43%) saturate(3232%) hue-rotate(100deg)
    brightness(92%) contrast(104%);

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`;

export const StyledTodosListNoTodos = styled(Card)`
  margin-top: 50px;
  font-style: italic;
`;

export const StyledTodosListHeaderOrder = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTodosListOrder = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-size: 90%;
  padding: 5px 0;
  height: 30px;
  text-align: center;
  writing-mode: vertical-rl;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const StyledTodosListDropdown = styled(Dropdown)`
  padding-right: 5px;
  color: ${({ theme }) => theme.colors.font};
  flex-direction: row;
  align-items: flex-end;
`;

export const StyledTodosListSearch = styled(Search)`
  width: 95%;
  margin: 5px;
`;

export const StyledTodosListBody = styled.ul`
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-top: 15px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledExport = styled(Export)`
  width: 40%;
  margin-left: auto;
`;
