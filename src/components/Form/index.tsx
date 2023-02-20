import React, { useContext, useEffect, useState } from "react";
import { DataContext, ValueContext } from "../../context/DataContext";
import { IData, IValueAndSetValue } from "../../interfaces/globalInterfaces";
import FormButton from "./FormButton";
import TextField from "./FormTextField";
import {
  StyledForm,
  StyledFormButtonsContainer,
  StyledFormTextsContainer,
  StyledText,
} from "./styles";

const Form = () => {
  const { data, setData }: any = useContext(DataContext);
  const { value, setValue }: any = useContext(ValueContext);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleSave = () => {
    if (isEdit) {
      data.map((val: IData) => {
        if (val.id === value.id) {
          val.name = name;
          val.description = description;
        }
        return val;
      });
      setName("");
      setDescription("");
      setIsEdit(false);
      setValue(null);
    } else {
      if (name != "" && description != "") {
        setData([
          ...data,
          { id: data.length + 1, name: name, description: description },
        ]);
        setName("");
        setDescription("");
      }
    }
  };

  const handleCancel = () => {
    setName("");
    setDescription("");
    setIsEdit(false);
    setValue(null);
  };

  useEffect(() => {
    if (value) {
      setIsEdit(true);
      setName(value.name);
      setDescription(value.description);
    }
  }, [value]);

  return (
    <StyledForm>
      <StyledFormTextsContainer>
        <StyledText>Servicio </StyledText>
        <TextField
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </StyledFormTextsContainer>
      <StyledFormButtonsContainer>
        <FormButton btnText="Grabar" btnColor="#53ba6c" onClick={handleSave} />
        <FormButton
          btnText="Cancelar"
          btnColor="#eb9da5"
          onClick={handleCancel}
        />
      </StyledFormButtonsContainer>
    </StyledForm>
  );
};

export default Form;
