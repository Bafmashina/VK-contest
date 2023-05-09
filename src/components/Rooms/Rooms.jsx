import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import React, { forwardRef } from "react";
import "../styles.css";

export const SelectRooms = forwardRef((props, ref) => {
  const [bash, setBash] = React.useState("");

  const handleChange = (event) => {
    setBash(event.target.value);
  };

  return (
    <div className='inpytStyle'>
      <InputLabel id="demo-simple-select-label">Переговорная</InputLabel>
      <Select
        {...props}
        inputRef={ref}
        onChange={handleChange}
        value={bash}
      >
        <MenuItem value={"1"}>Кабинет № 1</MenuItem>
        <MenuItem value={"2"}>Кабинет № 2</MenuItem>
        <MenuItem value={"3"}>Кабинет № 3</MenuItem>
        <MenuItem value={"4"}>Кабинет № 4</MenuItem>
        <MenuItem value={"5"}>Кабинет № 5</MenuItem>
        <MenuItem value={"6"}>Кабинет № 6</MenuItem>
        <MenuItem value={"7"}>Кабинет № 7</MenuItem>
        <MenuItem value={"8"}>Кабинет № 8</MenuItem>
        <MenuItem value={"9"}>Кабинет № 9</MenuItem>
        <MenuItem value={"10"}>Кабинет № 10</MenuItem>
      </Select>
    </div>
  );
});
