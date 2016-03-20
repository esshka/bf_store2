import React, { Component } from 'react';

export default class StoreItem extends Component {
  render() {
    const {item} = this.props;

    return (
      <div className="store-item">
          <div className="store-item__image">
              <div className="store-item__image-wrapper">
                  <img src={item.img} />
              </div>
          </div>
          <div className="store-item__title">
              <div className="store-item__name">{item.name}</div>
              <div className="store-item__link">
                <a href="#">See Deals</a>
              </div>
          </div>

          <div className="store-item__deals">
              <div className="store-item__deals-icon"></div>
              <div className="store-item__deals-count">
                  {item.deals} Deals
              </div>
          </div>
      </div>
    );
  }
}
