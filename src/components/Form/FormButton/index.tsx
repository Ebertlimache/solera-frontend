import React from "react";
import { IFormButton } from "./interface";
import { StyledButton } from "./styles";

const FormButton = (props: IFormButton) => {
  const { btnText, onClick } = props;

  return (
    <StyledButton {...props} onClick={onClick}>
      {btnText}
    </StyledButton>
  );
};

export default FormButton;
