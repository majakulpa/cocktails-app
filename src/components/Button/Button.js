import React from "react";
import classes from "./Button.css";

const button = ({ clicked, text }) => {
  return (
    <button onClick={clicked} className={classes.Button}>
      <span>{text}</span>
      <div className={classes.Liquid} />
    </button>
  );
};

export default button;
