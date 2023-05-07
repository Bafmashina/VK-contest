import React from "react";
import "../styles.css";

export const Comments = ({children, ...props}) => {
  const [valueComment, setValueComment] = React.useState("");

  const changeComments = (ev) => [setValueComment(ev.target.value)];

  return (
   <div>
    <h1>Ваши пожелания:</h1>
    <textarea className="comments" value={valueComment} onChange={changeComments}/>
   </div>
  );
};
