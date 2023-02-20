export interface IData {
  id: number;
  name: string;
  description: string;
}

export interface IValue extends IData {}
export interface IDataProvider {
  children: JSX.Element;
}

export interface IDataAndSetData {
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
}

export interface IValueAndSetValue {
  value: IValue | null;
  setValue: React.Dispatch<React.SetStateAction<IValue | null>>;
} 
