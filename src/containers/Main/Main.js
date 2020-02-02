import React, { Component, Fragment } from "react";
import axios from "axios";
import Card from "./../../components/Card/Card";
import Button from "./../../components/Button/Button";

class Main extends Component {
  state = {
    drinks: []
  };

  componentDidMount() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
        this.setState({ drinks: response.data.drinks[0] });
      });
  }

  randomCocktailHandler = drinks => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
        this.setState({ drinks: response.data.drinks[0] });
      });
  };

  render() {
    const { drinks } = this.state;
    return (
      <Fragment>
        <Card drink={drinks} />
        <Button clicked={this.randomCocktailHandler} />
      </Fragment>
    );
  }
}

export default Main;
