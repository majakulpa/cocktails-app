import React from "react";
import classes from "./NavigationItem.css";

const navigationItem = props => (
  <li className={classes.Item}>{props.children}</li>
);
export default navigationItem;
