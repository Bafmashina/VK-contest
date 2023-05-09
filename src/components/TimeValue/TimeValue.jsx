import React, { forwardRef } from "react";
import "../styles.css";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

export const TimeValue = forwardRef((props, ref) => {
  const [currentTime, setCurrentTime] = React.useState(dayjs);

  const handleChangeDate = (event) => {
    setCurrentTime(event.target.value);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <TimePicker
          label="Время"
            value={currentTime}
            onChange={handleChangeDate}
            inputRef={ref}
            {...props}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
});
