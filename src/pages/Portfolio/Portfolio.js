import React, { Component } from 'react';
import './Portfolio.css';
import ImageList from './ImageList';
// const works = require('../../../public/data');

// class ImageCard extends React.Component {
//   constructor(props) {
//     super(props);

//     this.props.count.setState({
//       count: this.props.count + 1
//     })
//   }

//   render() {
//     return (
//       <div className="portfolio">
//         <h1>{this.props.count}</h1>
//       </div>
//     );
//   }

// }
// const ImageCard = (props) => (
//   <img src={props.img} alt={props.name} height="300px" width="400px" />
// )

class Portfolio extends Component {
 render() {
    return (
      <div className="portfolio">
        <ImageList />
      </div>
    );
  }
}

// <ImageList />

export default Portfolio;