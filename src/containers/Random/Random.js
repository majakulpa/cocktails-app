import React, { Component } from "react";
//import axios from "axios";
//import Card from "../../components/Card/Card";
import CocktailList from "../../components/CocktailList/CocktailList";
import Button from "../../components/Button/Button";
import classes from "./Random.css";
import Loader from "./../../components/UI/Loader";

class Random extends Component {
  state = {
    loading: false,
    name: "",
    drinks: []
  };

  componentDidMount() {
    this.randomCocktailHandler();
  }

  // randomCocktailHandler = drinks => {
  //   axios
  //     .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  //     .then(response => {
  //       this.setState({ drinks: response.data.drinks[0] });
  //     });
  // };

  randomCocktailHandler = event => {
    // event.preventDefault();
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, drinks: data.drinks }));
  };

  render() {
    const { drinks, name, loading } = this.state;
    // const { drinks } = this.state;

    const filteredCocktails = drinks.filter(cocktail => {
      return cocktail.strDrink.toLowerCase().includes(name.toLowerCase());
    });

    return (
      <div className={classes.Container}>
        <Button clicked={this.randomCocktailHandler} text="Next" />

        {loading ? <Loader /> : <CocktailList cocktail={filteredCocktails} />}
      </div>
    );
  }
}

export default Random;
