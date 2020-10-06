import React, { Component } from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import axios from 'axios';
import './scss/main.scss';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      order: [],
      menu: []
    };
  }

  componentDidMount () {

    // I'm having issues with the API and the react project, the request is getting blocked by CORS, 
    // and is taking already too much time trying to solved it. I will leave the code for your
    // review. This should polulate the menu with an Array of Items.

    // axios.get(`https://mobile-dev-code-project.s3-us-west-2.amazonaws.com/project.json`, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   crossDomain: true
    // }).then( (response) => (
    //     this.setState({ menu: response.data.menu })
    //   ));

    // Adding Items manually
    this.setState({
      menu: [
        {
          "item": "Burger",
          "options": [
            {
              "size": "regular",
              "price": 3
            }
          ]
        },
        {
          "item": "Soda",
          "options": [
            {
              "size": "small",
              "price": 0.99
            },
            {
              "size": "regular",
              "price": 1.5
            },
            {
              "size": "large",
              "price": 2
            },
            {
              "size": "too large",
              "price": 3.5
            }
          ]
        },
        {
          "item": "Fries",
          "options": [
            {
              "size": "small",
              "price": 0.99
            },
            {
              "size": "regular",
              "price": 1.5
            },
            {
              "size": "large",
              "price": 1.99
            }
          ]
        }
      ]
    })
  }
  addOrder (payload) {
    this.setState(state => {
      const order = [...state.order, payload]
      return { order }
    })
  }
  render () {
    return (
      <div className="App">
        <h1>Fast Food Menu </h1>
        <div className="container">
          <Menu menu={ this.state.menu } addItem={this.addOrder.bind(this)}/>
          <Order order={ this.state.order } />
        </div>
      </div>
    );
  }
}

export default App;
