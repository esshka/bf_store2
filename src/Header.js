import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="wrapper">
          <div className="logo"></div>
          <div className="search">
              <div className="input-group">
                <span className="search-cancel"></span>
                <input type="text" placeholder='Search' />
                <span className="search-go"></span>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
