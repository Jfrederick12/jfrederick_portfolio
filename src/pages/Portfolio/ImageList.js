import React, { Component } from 'react';
import ShowCard from './ShowCard';
import './Portfolio.css';
import works from './works';
import { Modal, OverlayTrigger, Button } from 'react-bootstrap';

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

    this.setState({
      id: this.state.id,
      showModal: true
    });
  }

  render() {
    return (
      <div className="column" >
        {works.map((work) => (
          <div key={work.id} onClick={this.selectWork.bind(this, work.id, work.name, work.img, work.description )}>
            <ShowCard {...work} />
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

console.log(works[0].description)

export default ImageList;