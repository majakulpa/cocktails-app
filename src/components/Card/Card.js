import React from "react";
import classes from "./Card.css";

const card = ({ drink }) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Recipe}>
        <h3>{drink.strDrink}</h3>
        <h4>Ingredients</h4>
        <ul>
          <li>
            {drink.strMeasure1} {drink.strIngredient1}
          </li>
          <li>
            {drink.strMeasure2} {drink.strIngredient2}
          </li>
          <li>
            {drink.strMeasure3} {drink.strIngredient3}
          </li>
          <li>
            {drink.strMeasure4} {drink.strIngredient4}
          </li>
          <li>
            {drink.strMeasure5} {drink.strIngredient5}
          </li>
          <li>
            {drink.strMeasure6} {drink.strIngredient6}
          </li>
          <li>
            {drink.strMeasure7} {drink.strIngredient7}
          </li>
          <li>
            {drink.strMeasure8} {drink.strIngredient8}
          </li>
          <li>
            {drink.strMeasure9} {drink.strIngredient9}
          </li>
          <li>
            {drink.strMeasure10} {drink.strIngredient10}
          </li>
          <li>
            {drink.strMeasure11} {drink.strIngredient11}
          </li>
          <li>
            {drink.strMeasure12} {drink.strIngredient12}
          </li>
          <li>
            {drink.strMeasure13} {drink.strIngredient13}
          </li>
          <li>
            {drink.strMeasure14} {drink.strIngredient14}
          </li>
          <li>
            {drink.strMeasure15} {drink.strIngredient15}
          </li>
        </ul>
        <h4>Instructions</h4>
        <div>{drink.strInstructions}</div>
        <h4>Glass</h4>
        <div>{drink.strGlass}</div>
      </div>
      <div
        className={classes.Image}
        style={{
          backgroundImage: `url(${drink.strDrinkThumb})`
        }}
      ></div>
    </div>
  );
};

export default card;
