import React from "react";
import "../styles.css";

export const MainComponent = ({ children, ...props }) => {
  return (
    <div className="root">
      <form className="MainForm">{children}</form>
    </div>
  );
};
