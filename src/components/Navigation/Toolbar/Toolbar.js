import React from "react";
import NavigationItems from "./../NavigationItems/NavigationItems";
import classes from "./Toolbar.css";
import Logo from "./../../Logo/Logo";
import Main from "./../../../containers/Main/Main";

const toolbar = props => {
  return (
    <header className={classes.Navbar}>
      <div className={classes.Name}>
        <Logo />
        <p>
          Cocktail<span>Mixer</span>
        </p>
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
