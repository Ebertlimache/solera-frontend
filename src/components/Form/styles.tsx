import styled from "@emotion/styled";

export const StyledForm = styled.div`
  border: 2px solid #ddd8d8;
  width: 100%;
  border-radius: 7px;
  @media (max-width: 440px) {
    width: 80vw;
    margin: 0;
  }
`;

export const StyledFormTextsContainer = styled.div`
  padding: 20px 20px;
`;

export const StyledText = styled.div`
  text-align: start;
  font-weight: 500;
  font-size: 28px;
  padding: 0 0 15px 0;
`;

export const StyledFormButtonsContainer = styled.div`
  display: flex;
  padding: 15px 25px;
  border-top: 2px solid #ddd8d8;
  background-color: #f8f8f8;
  @media (max-width: 440px) {
    display: flex;
    justify-content: center;
  }
`;
