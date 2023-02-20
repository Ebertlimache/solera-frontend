import React, { useContext } from "react";
import { DataContext, ValueContext } from "../../context/DataContext";
import { IData } from "../../interfaces/globalInterfaces";
import { ICard } from "./interface";
import {
  StyledCard,
  StyledCardButtonsContainer,
  StyledCardTexts,
  StyledDeleteButton,
  StyledDescriptionText,
  StyledEditButton,
  StyledNameText,
} from "./style";

const Card = (props: ICard) => {
  const { setValue }: any = useContext(ValueContext);
  const { data, setData }: any = useContext(DataContext);
  const { id, name, description } = props;
  
  const handleEdit = () => {
    setValue({ id, name, description });
  };

  const handleDelete = () => {
    let newData = data.filter((val: IData) => {
      if (val.id !== id) return val;
    });
    setData(newData);
  };

  return (
    <StyledCard>
      <StyledCardTexts>
        <StyledNameText>{name}</StyledNameText>
        <StyledDescriptionText>{description}</StyledDescriptionText>
      </StyledCardTexts>
      <StyledCardButtonsContainer>
        <StyledEditButton onClick={handleEdit}>Editar</StyledEditButton>
        <StyledDeleteButton onClick={handleDelete}>Eliminar</StyledDeleteButton>
      </StyledCardButtonsContainer>
    </StyledCard>
  );
};

export default Card;
