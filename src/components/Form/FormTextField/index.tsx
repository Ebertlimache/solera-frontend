import React from "react";
import { ITextField } from "./interface";
import { StyledInput, StyledLabelContainer, StyledTextField } from "./styles";

const TextField = (props: ITextField) => {
  const { label, value, onChange } = props;
  return (
    <StyledTextField>
      <StyledLabelContainer>{label}</StyledLabelContainer>
      <StyledInput value={value} onChange={onChange} />
    </StyledTextField>
  );
};

export default TextField;
