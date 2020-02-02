import React from "react";
import classes from "./Button.css";

const button = ({ clicked }) => {
  return (
    <button onClick={clicked} className={classes.Button}>
      Next
    </button>
  );
};

export default button;
