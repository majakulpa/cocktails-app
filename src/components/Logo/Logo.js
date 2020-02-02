import React from "react";
import classes from "./Logo.css";
import logoGlass from "./../../assets/img/logo.png";

const logo = props => (
  <div className={classes.Logo}>
    <img src={logoGlass} alt="logo" />
  </div>
);

export default logo;
