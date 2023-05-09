import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { DataProvaider } from "./DataContext";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DataProvaider>
        <App />
      </DataProvaider>
    </LocalizationProvider>
  </React.StrictMode>
);
