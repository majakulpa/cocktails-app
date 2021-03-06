import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Welcome.css";
import Button from "./../Button/Button";

const welcome = () => (
  <div className={classes.Main}>
    <div className={classes.GlassContainer}>
      <div className={classes.Glass}>
        <div className={classes.Head}>
          <div className={classes.Liquid}></div>
        </div>
        <div className={classes.Leg}></div>
        <div className={classes.Base}></div>
      </div>
    </div>
    <NavLink to="/cocktails-app/random" className={classes.TextLink}>
      <div className={classes.Text}>cocktail recipes</div>
      <Button text="discover" />
    </NavLink>
  </div>
);

export default welcome;
