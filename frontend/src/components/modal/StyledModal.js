import styled from "styled-components";
import { Button } from "../";

export const StyledModal = styled.div``;

export const StyledModalOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const StyledModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.26);
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);
  width: 40%;
  z-index: 10;
  font-weight: 700;
`;

export const StyledModalHeader = styled.header`
  padding: 0.625rem 0.3rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledModalHeaderTitle = styled.h4`
  display: inline;
  margin: 0.5rem;
`;

export const StyledModalHeaderClose = styled.button`
  float: right;
  font-weight: 700;
  border: none;
  box-shadow: none;
  background-color: ${({ theme }) => theme.colors.transparent};
  padding: 0.2rem 0.45rem;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;

  :hover {
    background-color: ${({ theme }) => theme.colors.grey};
    cursor: pointer;
  }
`;

export const StyledModalMessage = styled.p`
  padding: 0.625rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.highlight};
`;

export const StyledModalFooter = styled.footer`
  padding: 1.25rem 0.3rem;
  display: flex;
  justify-content: center;
`;

export const StyledModalFooterButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.transparent};
  margin: 0 0.625rem;
`;

export const StyledModalFooterCancelButton = styled(StyledModalFooterButton)`
  border-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
`;
