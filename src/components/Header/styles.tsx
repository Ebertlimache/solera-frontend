import styled from "@emotion/styled";
import { IHeader } from "./interface";

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #f8f9fa;
  padding: 15px 0;
  background-color: #f8f9fa;
  border-radius: 7px;
`;

export const StyledButtonsContainer = styled.div`
  width: 18%;
  display: flex;
  margin-left: 3%;
  justify-content: space-between;
  @media (max-width: 1278px) {
    width: 25vw;
  }
  @media (max-width: 834px) {
    width: 35vw;
  }
  @media (max-width: 672px) {
    width: 90vw;
  }
`;

export const StyledTodosButton = styled.div`
  color: #979899;
  font-weight: 500;
  font-size: 20px;
  :hover {
    cursor: pointer;
    color: #c2c4c6;
  }
  ${({ filter }: IHeader) => {
    if (filter === "")
      return `color:#000000;
    :hover {
      color:#000000;
    }`;
  }};
`;
export const StyledAutosButton = styled.div`
  color: #979899;
  font-weight: 500;
  font-size: 20px;
  :hover {
    cursor: pointer;
    color: #c2c4c6;
  }
  ${({ filter }: IHeader) => {
    if (filter === "autos")
      return `color:#000000;
      :hover {
      color:#000000;
    }`;
  }};
`;
export const StyledSaludButton = styled.div`
  color: #979899;
  font-weight: 500;
  font-size: 20px;
  :hover {
    cursor: pointer;
    color: #c2c4c6;
  }
  ${({ filter }: IHeader) => {
    if (filter === "salud")
      return `color:#000000;
    :hover {
      color:#000000;
    }`;
  }};
`;
export const StyledHogarButton = styled.div`
  color: #979899;
  font-weight: 500;
  font-size: 20px;
  :hover {
    cursor: pointer;
    color: #c2c4c6;
  }
  ${({ filter }: IHeader) => {
    if (filter === "hogar")
      return `color:#000000;
    :hover {
      color:#000000;
    }`;
  }};
`;
