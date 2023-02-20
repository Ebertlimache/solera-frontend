import styled from "@emotion/styled";

export const StyledCard = styled.div`
  border: 2px solid #ddd8d8;
  width: 20vw;
  margin: 0 45px 35px 0;
  border-radius: 7px;
  height: 260px;
  word-wrap: break-word;
  @media (max-width: 1709px) {
    width: 25vw;
  }
  @media (max-width: 1278px) {
    width: 40vw;
  }
  @media (max-width: 672px) {
    width: 100%;
    margin: 0 0 40px 0
  }
`;

export const StyledCardTexts = styled.div`
  padding: 15px 25px 29px 25px;
  min-height: 148px;
`;

export const StyledNameText = styled.div`
  text-align: start;
  font-weight: 500;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const StyledDescriptionText = styled.div`
  text-align: start;
`;

export const StyledCardButtonsContainer = styled.div`
  border-radius: 0 0 7px 7px;
  border-top: 2px solid #ddd8d8;
  display: flex;
  padding: 15px 50px;
  background-color: #f8f8f8;
`;

export const StyledEditButton = styled.div`
  font-size: 18px;
  color: #48b4fa;
  padding: 5px 10px;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: #d4e1e7;
    border-radius: 5px;
  }
`;
export const StyledDeleteButton = styled.div`
  font-size: 18px;
  margin-left: 30px;
  padding: 5px 10px;
  color: #48b4fa;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: #d4e1e7;
    border-radius: 5px;
  }
`;
