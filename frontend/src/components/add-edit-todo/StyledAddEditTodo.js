import styled from "styled-components";
import Button from "../button";
import Card from "../card";
import Dropdown from "../dropdown";

export const StyledAddEditTodo = styled(Card)`
  width: 100%;
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledFormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.625rem;
`;

export const StyledFormTitleText = styled.div`
  font-weight: 700;
  font-size: 110%;
  color: ${({ theme }) => theme.colors.highlight};
  padding: 0.375rem 0;
`;

export const StyledFormItems = styled.div`
  display: flex;
`;

export const StyledFormItem = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledFormDropdown = styled(Dropdown)`
  width: 95%;
`;

export const StyledFormButton = styled(Button)`
  width: 100%;
`;

export const StyledFormCancel = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 90%;
  font-style: italic;
  padding: 0.3rem 0.625rem;
  border: 0.06rem solid ${({ theme }) => theme.colors.red};
  border-radius: 0.2rem;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
