import styled from "styled-components";

export const StyledCard = styled.div`
  box-shadow: 0 0.125rem 0.5rem ${({ theme }) => theme.colors.shadow};
  border-radius: 0.375rem;
  padding: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondary};
  ${(props) => props.addCSS};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;
