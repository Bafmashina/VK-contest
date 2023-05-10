import React, { forwardRef } from "react";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

import "../styles.css";

export const Comments = forwardRef((props, ref) => {
  return (
    <div className="comments">
      <InputLabel id="demo-simple-select-label">Коментарии</InputLabel>
      <TextField multiline rows={4} {...props} inputRef={ref} />
    </div>
  );
});
