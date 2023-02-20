import { useContext, useState } from "react";
import Header from "../../components/Header";
import "./App.css";
import Card from "../../components/Card/card";
import Form from "../../components/Form";
import { DataContext } from "../../context/DataContext";
import {
  StyledApp,
  StyledAppCardsContainer,
  StyledAppCardsForm,
  StyledAppFormContainer,
  StyledAppTitle,
} from "./styles";
import { IData } from "../../interfaces/globalInterfaces";

function App() {
  const { data }: any = useContext(DataContext);
  const [filter, setFilter] = useState<string>("");

  return (
    <StyledApp>
      <StyledAppTitle>Servicios</StyledAppTitle>
      <Header filter={filter} setFilter={setFilter} />
      <StyledAppCardsForm>
        <StyledAppCardsContainer>
          {filter === "" &&
            data?.map((service: IData) => (
              <Card
                key={service.id}
                id={service.id}
                name={service.name}
                description={service.description}
              />
            ))}
          {filter === "autos" &&
            data
              .filter((val: IData) => {
                if (val.description.includes("auto")) return val;
              })
              .map((service: IData) => (
                <Card
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                />
              ))}
          {filter === "salud" &&
            data
              .filter((val: IData) => {
                if (val.description.includes("salud")) return val;
              })
              .map((service: IData) => (
                <Card
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                />
              ))}
          {filter === "hogar" &&
            data
              .filter((val: IData) => {
                if (val.description.includes("hogar")) return val;
              })
              .map((service: IData) => (
                <Card
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                />
              ))}
        </StyledAppCardsContainer>
        <StyledAppFormContainer>
          <Form />
        </StyledAppFormContainer>
      </StyledAppCardsForm>
    </StyledApp>
  );
}

export default App;
