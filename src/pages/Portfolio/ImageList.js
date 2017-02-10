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
        description: "I spent a week on a ranch just outside of Austin, TX recording an upcoming record. Inspired by the acres of Texas hill country, a cozy air-stream trailer and free roaming cats, I created an illustration."
      },
      { id: 2,
        name: "CTA Illustration",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2616895/ctatrain.jpg",
        description: "A series of illustrations commisioned by Chicago Red Eye to do a series of illustrations based on Chicago landmarks for their Social Media."
      },
      { id: 3,
        name: "Little Boy Jr",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2633812/lbjdetail.jpg",
        description: "Work in progress for album artwork."
      },
      { id: 4,
        name: "Music Box",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2615073/music_box.jpg",
        description: "A series of illustrations commisioned by Chicago Red Eye to do a series of illustrations based on Chicago landmarks for their Social Media."
      },
      { id: 5,
        name: "Tuff Slang",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2599356/tuffslangvinyl.jpg",
        description: 'Album artwork for Tuff Slang release "Tuff Slang".'
      },
      { id: 6,
        name: "Blonde Ventura",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2596141/bv_screen.jpg",
        description: 'Type treatment for Los Angeles based Disco Pop group "Blonde Ventura". The idea was to go for a disco/arcade vibe. Something you would see on your favorite pinball machine, or at your local roller rink.'
      }
    ]

console.log(works[0].description)

export default ImageList;