import React from "react";
import "../styles.css";

export const SendFormButton = ({children, ...props}) => {
    const sendInform = () => {
        console.log()
    }

    return(
        <>
            <button className="buttonForm" onClick={sendInform}>Отправить</button>
        </>
    )
}