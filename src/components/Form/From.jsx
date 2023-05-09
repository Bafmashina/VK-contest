import React from "react";
import "../styles.css";

export const Form = ({ children, ...props }) => {
  return (
    <div className="root">
      <form noValidate {...props} className="MainForm">{children}</form>
    </div>
  );
};
