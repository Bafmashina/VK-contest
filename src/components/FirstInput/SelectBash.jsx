import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import React, { forwardRef } from "react";
import "../styles.css";

export const SelectBash = forwardRef((props, ref) => {
  const [bash, setBash] = React.useState("");

  const handleChange = (event) => {
    setBash(event.target.value);
  };

  return (
    <div className='inpytStyle'>
      <InputLabel id="demo-simple-select-label">Башня</InputLabel>
      <Select
        label="Время"
        {...props}
        inputRef={ref}
        onChange={handleChange}
        value={bash}
      >
        <MenuItem value={"1"}>Башня: 1</MenuItem>
        <MenuItem value={"2"}>Башня: 2</MenuItem>
      </Select>
    </div>
  );
});
