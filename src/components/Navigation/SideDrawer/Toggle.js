import React from "react";
import classes from "./SideDrawer.css";

const Toggle = ({ opened }) => (
  <div onClick={opened} className={classes.Toggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
export default Toggle;
