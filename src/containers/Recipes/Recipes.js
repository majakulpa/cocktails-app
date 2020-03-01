import React, { Component } from "react";
import Card from "./../../components/Card/Card";

class Recipes extends Component {
  state = {
    loading: false,
    name: "",
    drinks: []
  };

  //send name of ingredient to search by ingredient
  onChange = event => {
    this.setState({ name: event.target.value });
  };

  //search by ingredient
  handleSubmit = event => {
    event.preventDefault();

    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.name}`;
    //console.log(url);

    this.setState({ loading: true });

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, drinks: data.drinks }))
      .catch(error => {
        this.setState({ loading: false });
        alert("Please provide valid ingredient name!");
        //console.log(error);
      });

    //console.log(this.state.drinks);
  };

  render() {
    const { drinks, loading, name } = this.state;

    return (
      <div>
        <h3>Search cocktail by ingredient</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.onChange} />
          <button>Search!</button>
        </form>
        {loading ? "Loading..." : <Card drink={drinks} />}
      </div>
    );
  }
}

export default Recipes;
