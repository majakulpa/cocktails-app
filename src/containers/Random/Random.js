import React, { Component, Suspense } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import classes from "./Random.css";
import Loader from "./../../components/UI/Loader";
const CocktailList = React.lazy(() =>
  import("../../components/CocktailList/CocktailList")
);

class Random extends Component {
  state = {
    loading: false,
    name: "",
    drinks: []
  };

  componentDidMount() {
    this.randomCocktailHandler();
  }

  randomCocktailHandler = drinks => {
    this.setState({ loading: true });
    try {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => {
          this.setState({ loading: false, drinks: response.data.drinks });
        });
    } catch (error) {
      this.setState({ loading: false });
    }
  };

  render() {
    const { drinks, name, loading } = this.state;

    const filteredCocktails = drinks.filter(cocktail => {
      return cocktail.strDrink.toLowerCase().includes(name.toLowerCase());
    });

    return (
      <Suspense fallback={<Loader />}>
        <div className={classes.Container}>
          <Button clicked={this.randomCocktailHandler} text="Next" />
          {loading ? <Loader /> : <CocktailList cocktail={filteredCocktails} />}
        </div>
      </Suspense>
    );
  }
}

export default Random;
