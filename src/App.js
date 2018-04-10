import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Header from './components/Header'
import Recipes from './components/Recipes'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'},
        {name: 'Hamburger'}
      ],
      ingredients: [
        {name: 'macaroni'},
        {name: 'cheese'},
        {name: 'ground beef'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header name="Matt" />
        <Recipes stuff={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
