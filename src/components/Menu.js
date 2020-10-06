import React, { Component } from 'react';

class Menu extends Component {
  handleClick (payload) {
    this.props.addItem(payload)
  }
  render () {
    return (
      <div className="menu">
        {this.props.menu.map((item, index) => (
          <div className="menuItem" key={index}>
            <h2>{item.item}</h2>
            <div className="options">
              {item.options.map((option, index) => (
                <div key={index}>
                  <div className="row">
                    <span className="label">Size</span>
                    <span className="item-size">{option.size}</span>
                  </div>
                  <div className="row">
                    <span className="label">Price</span>
                    {option.price}
                  </div>
                  <button onClick={() => this.handleClick({item:item.item, size:option.size, price:option.price})}>Add</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Menu;