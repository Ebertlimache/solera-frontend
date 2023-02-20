import { IData, IValue } from "../../interfaces/globalInterfaces";

export interface ICard extends IData {}
export interface ISetValue {
  setValue: React.Dispatch<React.SetStateAction<IValue >>;
}
