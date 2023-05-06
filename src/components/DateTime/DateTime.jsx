import React from "react";

import DatePicker from "react-datepicker";
import "../styles.css";
import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";

export const DataTime = () => {
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
      placeholderText="Выбирите дату и время"
        className="dataTime"
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

// export const DataTime = () => {
//     const [currentDate, setCurrentDate] = React.useState(new Date());
//     const [currentTime, seyCurrentTime] = React.useState(new Date().setMinutes())

//       const filterTime = (time) => {
//           const nowDate = new Date()
//           const setDate = new Date(time)

//           return nowDate.getTime() < setDate.getTime()
//       }

//     return (
//       <div>
//         <h1>Время:</h1>
//         <DatePicker
//           className="dataTime"
//           selected={currentDate}
//           onChange={(date) => setCurrentDate(date)}
//           filterTime={filterTime}
//           dateFormat="MMMM d, yyyy h:mm aa"
//         />
//       </div>
//     );
//   };
