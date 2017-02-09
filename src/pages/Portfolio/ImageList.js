import React, { Component } from 'react';
import ShowCard from './ShowCard';
import './Portfolio.css';
import { Modal, OverlayTrigger, popover, tooltip, Button } from 'react-bootstrap';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.selectedWork = {id: null}
    this.state =  {
      id: this.selectedWork.id,
      name: this.selectedWork.name,
      img: this.selectedWork.img,
      showModal: false
    }
    console.log(this.state);
    this.count = 0
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
    console.log(this.state)
  }

  selectWork(id, name, img){
    this.selectedWork = {id: id, name: name, img: img, showModal: true}
    this.state = this.selectedWork
    // console.log(this.selectedWork)
    console.log(this.state.id)
    console.log(this.state)
    // console.log(this.showModal)
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
      <ul className="work-container" >
        {works.map((work) => (
          <li className="flex-item" onMouseOver={this.onHoverOver} onMouseOut={this.onHoverOut} key={work.id} onClick={this.selectWork.bind(this, work.id, work.name, work.img )}>
            <p onClick={this.open}>work id: {this.state.id}</p>

            <ShowCard {...work} />
          </li>
        ))}
      <p><img src={this.state.img}/></p>

      <Modal show={this.state.showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p><img src={this.state.img}/></p>

          <h4>Popover in a modal</h4>
          <hr />

          <h4>Overflowing text to show scroll behavior</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
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