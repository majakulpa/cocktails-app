import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItems from "./../NavigationItems/NavigationItems";
import Toggle from "./../SideDrawer/Toggle";
import classes from "./Toolbar.css";

const Toolbar = props => {
  return (
    <div className={classes.Navbar}>
      <NavLink to="/" className={classes.Text}>
        <div>cr</div>
      </NavLink>
      <Toggle opened={props.openDrawer} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Toolbar;
