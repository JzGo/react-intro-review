import React, { Component } from 'react'
import {
  Jumbotron,
  Button
} from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Hello, {this.props.name}!</h1>
      </Jumbotron>
    );
  }
}

export default Header;
