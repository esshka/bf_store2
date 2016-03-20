import React, { Component } from 'react';

import Footer from './Footer'
import Header from './Header'
import Item from './Item'
import StoreItem from './StoreItem'

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
    name: 'samsung tvs',
    img: 'images/noimage.png',
    text: '1',
    deals: '1'
  },
  {
    name: 'apple unlocked',
    img: 'images/noimage.png',
    text: '1',
    deals: '1'
  },
  {
    name: 'apple ipads',
    img: 'images/noimage.png',
    text: '1',
    deals: '1'
  },
  {
    name: 'laptops',
    img: 'images/noimage.png',
    text: '1',
    deals: '1'
  },
  {
    name: 'birkenstock',
    img: 'images/noimage.png',
    text: '1',
    deals: '1'
  },
  {
    name: 'yeti coolers',
    img: 'images/noimage.png',
    text: '1',
    deals: '1'
  },
  {
    name: 'hover boards',
    img: 'images/noimage.png',
    text: '1',
    deals: '1'
  },
];

export default class App extends Component {

  slideRight() {
    console.log('slide')
  }

  slideLeft() {
    console.log('slide')
  }

  render() {
    return (
      <div className="app">
        <Header />
          <div className="content-top">
            <div className="wrapper">
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
                
                {items.map(item => (
                    <Item item={item} key={item.name} />
                  ))}

                <div className="nav-left" onClick={this.slideLeft}></div>
                <div className="nav-right" onClick={this.slideRight}>
                  
                </div>
                <div className="nav-list">
                  
                </div>
              </div>
            </div>
          </div>

          <div className="content-main">
              <div className="wrapper">
                  <div className="content-main__header">
                    no image present 
                  </div>

                  <div className="content-main__items">
                      {storeItems.map((item, idx) => (
                          <StoreItem item={item} key={idx} />
                        ))}
                  </div>
              </div>
          </div>
        <Footer />
      </div>
    );
  }
}
