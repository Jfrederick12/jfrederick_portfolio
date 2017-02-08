import React, { Component } from 'react';
import './Portfolio.css';
// const works = require('../../../public/data');

// --------------------- SHOW CARD -------------------------

const ShowCard = (props) => (
  <img src={props.img} alt={props.name} height="225px" width="300px" />
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  img: string.isRequired,
  name: string.isRequired
}

//----------------- ImageList Component ----------------

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.selectedWork = {id: null}
    this.state = {}
  }
  // getInitialState () {
  //   return {
  //     selectedWork: {}
  //   }
  // },

  viewMore(id, name){
    // console.log('You clicked: ', id, name );
    // const selectedWork = { id: id, name: name}
    this.selectedWork = {id: id, name: name}
    // this.state = {id: id + 1 , name: name}
    console.log(this.selectedWork)
    return(
      <h1>{this.selectedWork}</h1>
    )
  }

  doStuff() {
    this.selectedWork = 'roar'
  }

  // onWorkClick() {
  //   console.log()
  // }

  onHoverOver(event) {
    event.currentTarget.style.opacity="0.5";
  }

  onHoverOut(event) {
    event.currentTarget.style.opacity="1";
  }

  render() {

    // const listWork = works.map((work) =>
    //   <li className="flex-item" key={work.id.toString()} onMouseOver={this.onHoverOver} onMouseOut={this.onHoverOut}>
    //     <img src={work.img} height="225px" width="300px" />
    //     <p>{work.name}</p>
    //   </li>
    // );

    return (
      <ul className="work-container" >
        {works.map((work) => (
          <li className="flex-item" onMouseOver={this.onHoverOver} onMouseOut={this.onHoverOut} key={work.id} onClick={this.viewMore.bind(this, work.id, work.name)}>
            <p onClick={this.doStuff}>{work.id}</p>
            <ShowCard {...work} />
          </li>
        ))}
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