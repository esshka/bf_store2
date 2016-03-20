import React, { Component } from 'react';

import Footer from './Footer'
import Header from './Header'
import Item from './Item'

const items = [
  {
    name: 'amazon',
    img: 'images/amazon.png',
    text: '1,997 deals',
  },
  {
    name: 'ebay',
    img: 'images/ebay.png',
    text: '1,997 deals',
  },
  {
    name: 'wallmart',
    img: 'images/wallmart.png',
    text: '1,997 deals',
  },
  {
    name: 'target',
    img: 'images/target.png',
    text: '1,997 deals',
  },
  {
    name: 'bestbuy',
    img: 'images/bestbuy.png',
    text: '1,997 deals',
  },
  {
    name: 'verizon',
    img: 'images/verizon.png',
    text: '1,997 deals',
  },
  {
    name: 'aliexpress',
    img: 'images/aliexpress.png',
    text: '1,997 deals',
  }
];

const storeItems = [
  {
    name: '1',
    img: 'images/1.png',
    text: '1',
  }
];

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
          <div className="content-top">
            <div className="content-top__header">
              <div className="content-top__banner-title">
                it's happening
              </div>
              <div className="content-top__banner-image"></div>
              <div className="content-top__banner-text">
                the best deal from over 1000 stores, including
              </div>
            </div>

            <div className="content-top__items">
              <div className="nav-left"></div>
              {items.map(item => (
                  <Item item={item} key={item.name} />
                ))}
              <div className="nav-right"></div>
              <div className="nav-list"></div>
            </div>
          </div>

          <div className="content-main">
              <div className="content-top__header">
                no image present 
              </div>

              <div className="content-main__items">
                    to do store item component
              </div>
          </div>
        <Footer />
      </div>
    );
  }
}
