import React, { useContext } from "react";

const DataContext = React.createContext();

export const DataProvaider = ({ children }) => {
  const [data, setData] = React.useState({});

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext)
