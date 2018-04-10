import React, { Component } from 'react';

class Recipes extends Component {

  render() {
    let recipes = this.props.stuff.map(function(recipe){
      return(
        <li key={recipe.name}><strong>{recipe.name}</strong></li>
      )
    })
    return (
      <ul>
        {recipes}
      </ul>
    );
  }
}

export default Recipes
