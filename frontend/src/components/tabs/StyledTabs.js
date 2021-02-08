import styled from "styled-components";

export const StyledTabs = styled.div``;

export const StyledTabsListWrapper = styled.div`
  position: fixed;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  top: 3.75rem;
  height: 4rem;
`;

export const StyledTabsList = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  list-style: none;
  margin: 1.25rem 0;
  padding: 0.625rem 1.25rem 0;
  // border-bottom: 0.063rem solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0.25rem 0.5rem -0.5rem ${({ theme }) => theme.colors.shadow};

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
  height: 2.5rem;
`;
