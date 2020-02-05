import React from "react";
import classes from "./Welcome.css";

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
    <div className={classes.Text}>cocktail mixer</div>
  </div>
);

export default welcome;
