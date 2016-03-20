import React, { Component } from 'react';

export default class Item extends Component {
  render() {
 
    const {item} = this.props;

    return (
      <div className="item">
          <div className="item-image">
            <img src={item.img} />
          </div>
          <hr/>
          <div className="item-text">
            {item.text}
          </div>
      </div>
    );
  }
}
