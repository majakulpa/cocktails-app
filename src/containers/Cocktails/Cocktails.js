import React, { Component } from "react";
//import axios from "axios";
import CocktailList from "../../components/CocktailList/CocktailList";
import Loader from "./../../components/UI/Loader";
import classes from "./Cocktails.css";

class Cocktails extends Component {
  state = {
    loading: false,
    name: "",
    drinks: []
  };

  //send name of ingredient to search by ingredient
  onChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  //search by ingredient
  handleSubmit = event => {
    event.preventDefault();

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.name}`;

    this.setState({ loading: true });

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, drinks: data.drinks }))
      .catch(error => {
        this.setState({ loading: false });
        alert("Please provide valid ingredient name!");
        //console.log(error);
      });
  };

  render() {
    const { drinks, name } = this.state;
    if (!drinks) {
      return (
        <div className={classes.Main}>
          <form onSubmit={this.handleSubmit} className={classes.Search}>
            <input value={name} onChange={this.onChange} />
            <button>Search!</button>
          </form>
          <p>Please provide valid cocktail name!</p>
        </div>
      );
    } else {
      const { drinks, name, loading } = this.state;
      const filteredCocktails = drinks.filter(cocktail => {
        return cocktail.strDrink.toLowerCase().includes(name.toLowerCase());
      });
      return (
        <div>
          <div className={classes.Main}>
            <form onSubmit={this.handleSubmit} className={classes.Search}>
              <input
                value={name}
                onChange={this.onChange}
                placeholder="Search cocktails..."
              />
              <button>Search</button>
            </form>
          </div>
          <div className={classes.Scroll}>
            {loading ? (
              <Loader />
            ) : (
              <CocktailList cocktail={filteredCocktails} />
            )}
          </div>
        </div>
      );
    }
  }
}

export default Cocktails;
