import React from "react";
import "../styles.css";
import { Button } from "@mui/base";

export const SendFormButton = ({ children, ...props }) => {
  return (
    <Button
      type="submit"
      className="buttonForm"
      {...props}

    >
      Отправить
    </Button>
  );
};
