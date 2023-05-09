import React from "react";
import "../styles.css";
import { Button } from "@mui/base";

export const SendFormButton = ({ children, ...props }) => {
  // const sendInform = (event) => {
  //   onSubmit()
  // };

  return (
    <Button
      type="submit"
      className="buttonForm"
      // onClick={}
      {...props}
    >
      {children}
    </Button>
  );
};
