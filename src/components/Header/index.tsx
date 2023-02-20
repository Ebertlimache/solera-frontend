import React from "react";
import { IHeader } from "./interface";
import {
  StyledAutosButton,
  StyledButtonsContainer,
  StyledHeader,
  StyledHogarButton,
  StyledSaludButton,
  StyledTodosButton,
} from "./styles";

const Header = (props: IHeader) => {
  const { setFilter } = props;
  return (
    <StyledHeader>
      <StyledButtonsContainer>
        <StyledTodosButton {...props} onClick={() => setFilter("")}>
          Todos
        </StyledTodosButton>
        <StyledAutosButton {...props} onClick={() => setFilter("autos")}>
          Autos
        </StyledAutosButton>
        <StyledSaludButton {...props} onClick={() => setFilter("salud")}>
          Salud
        </StyledSaludButton>
        <StyledHogarButton {...props} onClick={() => setFilter("hogar")}>
          Hogar
        </StyledHogarButton>
      </StyledButtonsContainer>
    </StyledHeader>
  );
};

export default Header;
