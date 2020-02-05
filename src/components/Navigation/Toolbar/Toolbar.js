import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItems from "./../NavigationItems/NavigationItems";
import classes from "./Toolbar.css";
import Logo from "./../../Logo/Logo";

const toolbar = props => {
  return (
    <div className={classes.Navbar}>
      <NavLink to="/">
        <div className={classes.Name}>Cocktail Mixer</div>
      </NavLink>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default toolbar;
