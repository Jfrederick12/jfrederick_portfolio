import React, { Component } from 'react';
import ShowCard from './ShowCard';
import './Portfolio.css';
import works from './works';
import { Modal, Button } from 'react-bootstrap';

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.selectedWork = {id: null}
    this.state =  {
      id: this.selectedWork.id,
      name: this.selectedWork.name,
      img: this.selectedWork.img,
      link: this.selectedWork.link,
      description: this.selectedWork.description,
      showModal: false
    }
    this.close = this.close.bind(this);
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
  }

  selectWork(id, name, img, description, involvement, link, tech){
    this.selectedWork = {id: id, name: name, img: img, description: description, involvement: involvement, link: link, tech: tech, showModal: true}
    this.state = this.selectedWork

    this.setState({
      id: this.state.id,
      showModal: true
    });
  }

  render() {
    return (
      <div className="gallery" >
        {works.map((work) => (
          <div key={work.id} onClick={this.selectWork.bind(this, work.id, work.name, work.img, work.description, work.involvement, work.link, work.tech )}>
            <ShowCard {...work} />
          </div>
        ))}

        {/* need to move Modal into it's own component and pass state through as props */}

        <Modal className='work-modal' show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton onClick={this.close}>
          </Modal.Header>
          <Modal.Body>
            <p><img src={this.state.img} alt={this.state.name} width="100%" /></p>
            <h4>{this.state.name}</h4>
            <hr />
              <p>{this.state.description}</p>
              <p>{this.state.tech}</p>
              <p>{this.state.involvement}</p>
              <a href={this.state.link}>{this.state.link}</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
};

export default ImageList;