import React from "react";

import DatePicker from "react-datepicker";
import "../styles.css";
import "react-datepicker/dist/react-datepicker.css";

export const DataTime = ({children, ...props}) => {
  const allTime = new Date();

  const [currentDate, setCurrentDate] = React.useState(
    allTime.setHours(allTime.setMinutes(new Date(), 0), 9)
  );

  const filterTime = (time) => {
    const nowDate = new Date();
    const setDate = new Date(time);

    return nowDate.getTime() < setDate.getTime();
  };

  return (
    <div>
      <h1>Время:</h1>
      <DatePicker
        className="dataTime"
        placeholderText="Выбирите дату и время"
        selected={currentDate}
        showTimeSelect
        withPortal
        onChange={(date) => setCurrentDate(date)}
        filterTime={filterTime}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
};

