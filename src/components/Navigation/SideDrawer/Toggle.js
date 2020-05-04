import React from "react";
import classes from "./SideDrawer.css";

const Toggle = props => (
  <div onClick={props.opened} className={classes.Toggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
export default Toggle;
