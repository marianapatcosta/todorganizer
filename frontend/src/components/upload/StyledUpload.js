import styled from "styled-components";
import { Button } from "..";

export const StyledUpload = styled(Button)`
  width: 100%;
`;

export const StyledUploadInput = styled.input`
  visibility: hidden;
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
`;
