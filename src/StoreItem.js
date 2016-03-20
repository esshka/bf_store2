import React, { Component } from 'react';

export default class StoreItem extends Component {
  render() {
    const {item} = this.props;

    return (
      <div className="store-item">
          <div className="store-item__image">
          
          </div>
          <div className="store-item__name">

          </div>

          <div className="store-item__deals">

          </div>
      </div>
    );
  }
}
