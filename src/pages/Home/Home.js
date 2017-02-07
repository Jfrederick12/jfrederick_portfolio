import React, { Component } from 'react';

const homeInfo = {
  info: 'this is stuff here',
  imageUrl: 'https://cdn0.iconfinder.com/data/icons/simple-outlines-1/100/Globe-512.png'
}

class Home extends Component {
 render() {
    return (
      <div className="parent">
        <div className="left">{homeInfo.info}</div>
        <div className="right">
          <img src={homeInfo.imageUrl} width="50%"/>
        </div>
      </div>
    );
 }
}
export default Home;

// <Col xs={12} md={8} />