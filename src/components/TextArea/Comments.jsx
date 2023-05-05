import React from "react";
import "../styles.css";

export const Comments = () => {
  const [valueComment, setValueComment] = React.useState("");

  const changeComments = (ev) => [setValueComment(ev.target.value)];

  return (
   <div>
    <textarea value={valueComment} onChange={changeComments}/>
   </div>
  );
};
