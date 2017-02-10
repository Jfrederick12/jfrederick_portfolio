import React, { Component } from 'react';
import ShowCard from './ShowCard';
import './Portfolio.css';
// const projects = require('../../../public/data');
import { Modal, OverlayTrigger, popover, tooltip, Button } from 'react-bootstrap';




class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.selectedWork = {id: null}
    this.state =  {
      id: this.selectedWork.id,
      name: this.selectedWork.name,
      img: this.selectedWork.img,
      description: this.selectedWork.description,
      showModal: false
    }
    this.close = this.close.bind(this);
    console.log(this.state);
    this.count = 0
  }

  close() {
    this.setState({
      id: this.state.id,
      showModal: false
    });
  }

  open() {
    this.setState({ showModal: true });
    console.log(this.state)
  }

  selectWork(id, name, img, description){
    this.selectedWork = {id: id, name: name, img: img, description: description, showModal: true}
    this.state = this.selectedWork
    console.log(this.state.id)
    console.log(this.state)

    this.setState({
      id: this.state.id,
      showModal: true
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
      <div className="column" >
        {works.map((work) => (
          <div className="hover01"  key={work.id} onClick={this.selectWork.bind(this, work.id, work.name, work.img, work.description )}>
            <ShowCard {...work} />
            <span className="text">{work.name}</span>
          </div>
        ))}

        {/* need to move Modal into it's own component and pass state through as props */}

        <Modal className='work-modal' show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton onClick={this.close}>
          </Modal.Header>
          <Modal.Body>
            <p><img src={this.state.img} width="100%" /></p>
            <h4>{this.state.name}</h4>
            <hr />
            <p>{this.state.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
};


const works = [
      { id: 1,
        name: "Moonphase Ranch",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2648085/moonphase.jpg",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/moonphase_thumb.jpg?raw=true",
        description: "I spent a week on a ranch just outside of Austin, TX recording an upcoming record. Inspired by the acres of Texas hill country, a cozy air-stream trailer and free roaming cats, I created an illustration."
      },
      { id: 2,
        name: "CTA Illustration",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2616895/ctatrain.jpg",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/cta_thumb.jpg?raw=true",
        description: "A series of illustrations commisioned by Chicago Red Eye to do a series of illustrations based on Chicago landmarks for their Social Media."
      },
      { id: 3,
        name: "Little Boy Jr",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2633812/lbjdetail.jpg",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/lbj_thumb.jpg?raw=true",
        description: "Work in progress for album artwork."
      },
      { id: 4,
        name: "Music Box",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2615073/music_box.jpg",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/music_box_thumb.jpg?raw=true",
        description: "A series of illustrations commisioned by Chicago Red Eye to do a series of illustrations based on Chicago landmarks for their Social Media."
      },
      { id: 5,
        name: "Cool Runnings",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/cool_runnings.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/cool_runnings_thumb.jpg?raw=true",
        description: 'Album artwork for Tuff Slang release "Tuff Slang".'
      },
      { id: 6,
        name: "Blonde Ventura",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/blonde_ventura_thumb.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/blonde_ventura_thumb.jpg?raw=true",
        description: 'Type treatment for Los Angeles based Disco Pop group "Blonde Ventura". The idea was to go for a disco/arcade vibe. Something you would see on your favorite pinball machine, or at your local roller rink.'
      },
      { id: 7,
        name: "Hobbit",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/hobbit.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/hobbit_thumb.jpg?raw=true",
        description: ""
      },
      { id: 8,
        name: "Hobbit Portraits",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/hobbit_portraits.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/hobbit_portraits_thumb.jpg?raw=true",
        description: ""
      },
      { id: 9,
        name: "SC Tour Poster",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/sc_canada.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/sc_canada_thumb.jpg?raw=true",
        description: ""
      },
      { id: 10,
        name: "The Orwells NYE Poster",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/the_orwells.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/the_orwells_thumb.jpg?raw=true",
        description: ""
      },
      { id: 11,
        name: "Logan Square",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/logan_square.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/logan_thumb.jpg?raw=true",
        description: ""
      },
      { id: 12,
        name: "Seatd Mobile App",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/seatd.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/seatd.jpg?raw=true",
        description: ""
      },
    ]

console.log(works[0].description)

export default ImageList;