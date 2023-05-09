import React, { forwardRef } from "react";
import "../styles.css";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export const DataTime = forwardRef((props, ref) => {
  const [currentDate, setCurrentDate] = React.useState(dayjs());

  const handleChangeDate = (event) => {
    setCurrentDate(event.target.value);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
          label="Дата"
            value={currentDate}
            onChange={handleChangeDate}
            inputRef={ref}
            {...props}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
});
