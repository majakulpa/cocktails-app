import React, { Component, Fragment } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

class Random extends Component {
  state = {
    drinks: []
  };

  componentDidMount() {
    this.randomCocktailHandler();
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
        <Button clicked={this.randomCocktailHandler} text="Next" />
        <Card drink={drinks} />
      </Fragment>
    );
  }
}

export default Random;
