import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-nav">
          <a href="#">Terms of conditons</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-cp">
          Copyright 2015 Black Friday Deals
        </div>
      </div>
    );
  }
}
