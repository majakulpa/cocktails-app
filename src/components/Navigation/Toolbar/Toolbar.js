import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItems from "./../NavigationItems/NavigationItems";
import classes from "./Toolbar.css";

const toolbar = props => {
  return (
    <div className={classes.Navbar}>
      <NavLink to="/" className={classes.Text}>
        <div>Cocktail Mixer</div>
      </NavLink>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default toolbar;
