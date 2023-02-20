import styled from "@emotion/styled";
import { IFormButton } from "./interface";

export const StyledButton = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  ${({ btnColor }: IFormButton) => {
    return `
    border: 2px solid ${btnColor};
    color: ${btnColor};
    :hover {
        background-color: ${btnColor};
        color: #FFFFFF;
        cursor: pointer;
      }`;
  }};
`;
