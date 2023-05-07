import Select from "react-select";
import React from "react";
import "../styles.css";

const options = [
  { value: "A", label: "Башня: A" },
  { value: "B", label: "Башня: Б" },
];

export const SelectBash = ({ children, ...props }) => {
  const [currentBush, setCurrentBush] = React.useState("");

  const getValueBash = () => {
    return currentBush
      ? options.find((bush) => bush.value === currentBush)
      : "";
  };

  const onChangeBush = (newBash) => {
    setCurrentBush(newBash.value);
  };

  return (
    <div className="inpytStyle">
      <h1>Башня:</h1>
      <Select
        placeholder="выбирите башню"
        value={getValueBash()}
        onChange={onChangeBush}
        options={options}
        isSearchable={false}
      />
    </div>
  );
};
