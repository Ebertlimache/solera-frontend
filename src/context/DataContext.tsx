import React, { createContext, useState } from "react";
import {
  IData,
  IDataAndSetData,
  IDataProvider,
  IValue,
  IValueAndSetValue,
} from "../interfaces/globalInterfaces";
import { baseData } from "./data";

export const DataContext = createContext<IDataAndSetData | null>(null);
export const ValueContext = createContext<IValueAndSetValue | null>(null);

const DataProvider = ({ children }: IDataProvider) => {
  const [data, setData] = useState<IData[]>(baseData);
  const [value, setValue] = useState<IValue | null>(null);

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      <DataContext.Provider value={{ data, setData }}>
        {children}
      </DataContext.Provider>
    </ValueContext.Provider>
  );
};

export default DataProvider;
