import React, { Component } from 'react';
import ShowCard from './ShowCard';
import './Portfolio.css';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.selectedWork = {id: null}
    this.state = this.selectedWork;

    this.count = 0

    this.onCowClick = this.onCowClick.bind(this);
  }


  onCowClick(evt) {
    this.setState({
      num: this.state.num + 1
    });
  }

  selectWork(id, name, img){
    this.selectedWork = {id: id, name: name, img: img}
    this.state = this.selectedWork
    console.log(this.selectedWork)
    // this.state = {id: id + 1 , name: name}
    console.log(this.state.id)
    this.setState({
      id: this.state.id
    });
  }

  onHoverOver(event) {
    event.currentTarget.style.opacity="0.5";
  }

  onHoverOut(event) {
    event.currentTarget.style.opacity="1";
  }

  render() {

    return (
      <ul className="work-container" >
        {works.map((work) => (
          <li className="flex-item" onMouseOver={this.onHoverOver} onMouseOut={this.onHoverOut} key={work.id} onClick={this.selectWork.bind(this, work.id, work.name, work.img )}>
            <p onClick={this.onCowClick}>work id: {this.state.id}</p>

            <ShowCard {...work} />
          </li>
        ))}
      <p><img src={this.state.img}/></p>
      </ul>
    );
  }
};



const works = [
      { id: 1,
        name: "Moonphase Ranch",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2648085/moonphase.jpg"
      },
      { id: 2,
        name: "CTA Illustration",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2616895/ctatrain.jpg"
      },
      { id: 3,
        name: "Little Boy Jr",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2633812/lbjdetail.jpg"
      },
      { id: 4,
        name: "Music Box",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2615073/music_box.jpg"
      },
      { id: 5,
        name: "Tuff Slang",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2599356/tuffslangvinyl.jpg"
      },
      { id: 6,
        name: "Blonde Ventura",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2596141/bv_screen.jpg"
      }
    ]

export default ImageList;