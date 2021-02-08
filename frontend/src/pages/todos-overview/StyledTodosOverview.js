import styled from "styled-components";
import { Card, Dropdown, Export, Search } from "../../components";

export const StyledTodosOverview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 1rem;

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
  width: 80%;
  margin-top: 3.125rem;
  box-sizing: border-box;
  height: 28rem;
  overflow: hidden;

  @media (min-width: 480px) {
    width: 65%;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    width: 30%;
  }
`;

export const StyledAddTodo = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 480px) {
    width: 65%;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    width: 50%;
    box-sizing: border-box;
  }

  @media (min-width: 1123px) {
    width: 45%;
    box-sizing: border-box;
  }
`;

export const StyledTodosListHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTodosListHeaderTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
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
  margin-bottom: 0.625rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.3rem;
  overflow: visible;
`;

export const StyledTodosListHeaderIcon = styled.img`
  width: 1rem;
  height: 1rem;
  padding: 0.625rem 0;
  margin-left: 0.625rem;
  filter: invert(23%) sepia(43%) saturate(3232%) hue-rotate(100deg)
    brightness(92%) contrast(104%);

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`;

export const StyledTodosListNoTodos = styled.div`
  margin: 3.125rem auto;
  text-align: center;
  font-style: italic;
`;

export const StyledTodosListHeaderOrder = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0.3rem 0;
`;

export const StyledTodosListOrder = styled.span`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 90%;
  height: 2rem;
  text-align: center;
  writing-mode: vertical-rl;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const StyledTodosListDropdown = styled(Dropdown)`
  padding: 0 0.3rem;
  /* flex-direction: row;
  align-items: center; */
`;

export const StyledTodosListSearch = styled(Search)`
  width: 95%;
  margin: 0.3rem;
`;

export const StyledTodosListBody = styled.ul`
  overflow: auto;
  overflow-x: hidden;
  margin-top: 1rem;
  /*  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  } */
  /* width */

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.disabled};
    border-radius: 0.5rem;
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 7rem;
  }

  &:hover {
    overflow-y: auto;
   
  }
`;

export const StyledExport = styled(Export)`
  margin-left: 1rem;
`;
