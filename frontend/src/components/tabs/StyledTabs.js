import styled from "styled-components";

export const StyledTabs = styled.div``;

export const StyledTabsListWrapper = styled.div`
  position: fixed;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  top: 60px;
  height: 65px;
`;

export const StyledTabsList = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  list-style: none;
  margin: 20px 0px;
  padding: 10px 20px 0;
  // border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 4px 8px -8px ${({ theme }) => theme.colors.shadow};

  ${({ disabled }) =>
    disabled
      ? `
      background-color: ${({ theme }) => theme.colors.disabled};
      opacity: 0.3;
      pointer-events: none;

      &:hover {  
        cursor: default;
      }
    `
      : ""}
`;

export const StyledTabsContent = styled.div`
  ${({ hidden }) =>
    hidden
      ? `
     display: none;
    `
      : ""}
`;

export const StyledTabsSpacer = styled.div`
  height: 40px;
`;
