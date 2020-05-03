import React from "react";
import classes from "./Button.css";

const button = ({ clicked, text }) => {
  return (
    <button onClick={clicked} className={classes.Button}>
      {text}
    </button>
  );
};

export default button;
