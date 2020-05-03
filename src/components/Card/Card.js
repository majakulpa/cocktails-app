import React from "react";
import classes from "./Card.css";

const Card = ({ name, glass, instructions, image, ingredients }) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Recipe}>
        <h3>{name}</h3>
        <h4>Ingredients:</h4>
        {ingredients.map((ingredient, index) => {
          return ingredient !== " " && ingredient !== "null null" ? (
            <span key={index}>
              {ingredient} <br />
            </span>
          ) : null;
        })}
        <h4>Instructions</h4>
        <span>{instructions ? instructions : "unknown"}</span>
        <h4>Glass:</h4> <span>{glass ? glass : "unknown"}</span>
      </div>
      <div
        className={classes.Image}
        style={{
          backgroundImage: `url(${image})`
        }}
      />
    </div>
  );
};

export default Card;
