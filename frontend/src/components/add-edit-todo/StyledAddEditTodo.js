import styled from "styled-components";
import Button from "../button";
import Card from "../card";

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
  padding-left: 10px;
`;

export const StyledFormTitleText = styled.div`
  font-weight: 700;
  font-size: 110%;
  color: ${({ theme }) => theme.colors.green};
  padding: 6px 0;
`;

export const StyledFormItem = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const StyledFormButton = styled(Button)`
  width: 100%;
`;

export const StyledFormCancel = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 90%;
  font-style: italic;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
