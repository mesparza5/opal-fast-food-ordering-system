import React, { Component } from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import './scss/main.scss';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      order: [],
      menu: []
    };
  }

  render () {
    return (
      <div className="App">
        <h1>Menu</h1>
        <div className="container">
          <Menu />
          <Order />
        </div>
      </div>
    );
  }
}

export default App;
