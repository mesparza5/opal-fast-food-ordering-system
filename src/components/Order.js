import React, { Component } from 'react';

class Order extends Component {
  render () {
    return (
      <div className="order">
        {this.props.order && this.props.order.length > 0 ? '' : (<h1 className="empty">Order is Empty.</h1>)}
        {this.props.order.map((menuItem, index) => (
          <div className="orderItem" key={index}>
            <h3>
              <span className="item-size">{menuItem.size}</span> 
              {menuItem.item}
            </h3>
            <p>${menuItem.price}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Order;