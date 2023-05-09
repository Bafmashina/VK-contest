import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import React, { forwardRef } from "react";
import "../styles.css";




export const FlorsInBash = forwardRef((props, ref) => {

  const [bash, setBash] = React.useState("");

  const handleChange = (event) => {
    setBash(event.target.value);
  };
  

  return (
    <div className='inpytStyle'>
      <InputLabel id="demo-simple-select-label">Этаж</InputLabel>
      <Select
        {...props}
        inputRef={ref}
        onChange={handleChange}
        value={bash}
      >
        <MenuItem value={"3"}>3 этаж</MenuItem>
        <MenuItem value={"4"}>4 этаж</MenuItem>
        <MenuItem value={"5"}>5 этаж</MenuItem>
        <MenuItem value={"6"}>6 этаж</MenuItem>
        <MenuItem value={"7"}>7 этаж</MenuItem>
        <MenuItem value={"8"}>8 этаж</MenuItem>
        <MenuItem value={"9"}>9 этаж</MenuItem>
        <MenuItem value={"10"}>10 этаж</MenuItem>
        <MenuItem value={"11"}>11 этаж</MenuItem>
        <MenuItem value={"12"}>12 этаж</MenuItem>
        <MenuItem value={"13"}>13 этаж</MenuItem>
        <MenuItem value={"14"}>14 этаж</MenuItem>
        <MenuItem value={"15"}>15 этаж</MenuItem>
        <MenuItem value={"16"}>16 этаж</MenuItem>
        <MenuItem value={"17"}>17 этаж</MenuItem>
        <MenuItem value={"18"}>18 этаж</MenuItem>
        <MenuItem value={"19"}>19 этаж</MenuItem>
        <MenuItem value={"20"}>20 этаж</MenuItem>
        <MenuItem value={"21"}>21 этаж</MenuItem>
        <MenuItem value={"22"}>22 этаж</MenuItem>
        <MenuItem value={"23"}>23 этаж</MenuItem>
        <MenuItem value={"24"}>24 этаж</MenuItem>
        <MenuItem value={"25"}>25 этаж</MenuItem>
        <MenuItem value={"26"}>26 этаж</MenuItem>
        <MenuItem value={"27"}>27 этаж</MenuItem>
      </Select>
    </div>
  );
});
