import React from "react";
import "../styles.css";

export const ClearAllButton = ({ ...props }) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <button onClick={refreshPage} {...props} className="clearAllbutton">
      Очистить
    </button>
  );
};
