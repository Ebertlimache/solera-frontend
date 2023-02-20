import styled from "@emotion/styled";

export const StyledApp = styled.div`
  padding: 0 25px;
  width: 97%;
`;

export const StyledAppTitle = styled.div`
  font-size: 40px;
  margin: 8px;
  font-weight: 500;
`;

export const StyledAppCardsForm = styled.div`
  display: flex;
  padding: 30px 30px 30px 0;
  width: 100%;
  @media (max-width: 672px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledAppCardsContainer = styled.div`
  width: 71%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1709px) {
    justify-content: center;
  }
  @media (max-width: 1278px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
  }
  @media (max-width: 834px) {
    width: 60%;
  }
  @media (max-width: 672px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledAppFormContainer = styled.div`
  width: 29%;
  @media (max-width: 1278px) {
    width: 40%;
  }
  @media (max-width: 834px) {
    width: 40%;
  }
  @media (max-width: 672px) {
    margin-bottom: 40px;
    width: 80%;
    display: flex;
    justify-content: center;
  }
`;
