import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = () => (
  <ul className={classes.List}>
    <NavigationItem link="/">Recipes</NavigationItem>
    <NavigationItem link="/">About</NavigationItem>
  </ul>
);

export default navigationItems;
