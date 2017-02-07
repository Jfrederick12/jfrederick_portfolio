import React, { Component } from 'react';
import './Portfolio.css';
// const works = require('../../../public/data');

// --------------------- SHOW CARD -------------------------

const ShowCard = (props) => (
    <li className="flex-item">
      <img src={props.img} height="225px" width="300px" />
      <p>{props.name}</p>
    </li>
)

const ImageList = React.createClass ({
  getInitialState () {
    return {
      selectedWork: []
    }
  },

  onHoverOver(event) {
    this.setState({ selectedWork: event.currentTarget })
    event.currentTarget.style.opacity="0.5";
    console.log(event.currentTarget)
  },

  onHoverOut(event) {
    event.currentTarget.style.opacity="1";
  },

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
          <ShowCard {...work} key={work.id} />
        ))}
      </ul>
    );
  }
});


const { string } = React.PropTypes

ShowCard.propTypes = {
  img: string.isRequired,
  name: string.isRequired
}

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