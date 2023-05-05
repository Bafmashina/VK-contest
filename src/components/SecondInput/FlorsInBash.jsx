import Select from "react-select";
import React from "react";
import  '../styles.css'

const options = [
  { value: "3", label: "Этаж: 3" },
  { value: "4", label: "Этаж: 4" },
  { value: "5", label: "Этаж: 5" },
  { value: "6", label: "Этаж: 6" },
  { value: "7", label: "Этаж: 7" },
  { value: "8", label: "Этаж: 8" },
  { value: "9", label: "Этаж: 9" },
  { value: "10", label: "Этаж: 10" },
  { value: "11", label: "Этаж: 11" },
  { value: "12", label: "Этаж: 12" },
  { value: "13", label: "Этаж: 13" },
  { value: "14", label: "Этаж: 14" },
  { value: "15", label: "Этаж: 15" },
  { value: "16", label: "Этаж: 16" },
  { value: "17", label: "Этаж: 17" },
  { value: "18", label: "Этаж: 18" },
  { value: "19", label: "Этаж: 19" },
  { value: "20", label: "Этаж: 20" },
  { value: "21", label: "Этаж: 21" },
  { value: "22", label: "Этаж: 22" },
  { value: "23", label: "Этаж: 23" },
  { value: "24", label: "Этаж: 24" },
  { value: "25", label: "Этаж: 25" },
  { value: "26", label: "Этаж: 26" },
  { value: "27", label: "Этаж: 27" },
];

const isMulti = [];

export const FlorsInBash = () => {
  const [currentFlor, setCurrentFlor] = React.useState("");

  const getValueFlor = () => {
    if (currentFlor) {
      return isMulti
        ? options.filter((flor) => currentFlor.indexOf(flor.value) >= 0)
        : options.find((el) => el.value === currentFlor);
    } else {
      return isMulti ? [] : "";
    }
  };

  const onChangeFlor = (newFlor) => {
    setCurrentFlor(isMulti ? newFlor.map((flo) => flo.value) : newFlor.value);
  };

  return (
    <div className='inpytStyle'>
      <h1>Этаж:</h1>
      <Select
        placeholder="выбирите этаж"
        value={getValueFlor()}
        onChange={onChangeFlor}
        options={options}
        isMulti={isMulti}
        isSearchable={false}
      />
    </div>
  );
};
