import React, { Component } from 'react';

export default class Item extends Component {
  render() {
 
    const {item} = this.props;

    return (
      <div className="item">
          <div className="item-image">
            <div className="item-image-wrapper">
                <img src={item.img} />
            </div> 
          </div>
          <hr/>
          <div className="item-text">
            {item.text}
          </div>
      </div>
    );
  }
}
