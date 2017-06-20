import React, { Component } from 'react';
import ShowCard from './ShowCard';
import './Portfolio.css';
import works from './works';
import SlidingPane from 'react-sliding-pane';
import ScrollLock from 'react-scrolllock';
import MediaQuery from 'react-responsive';
import 'react-sliding-pane/dist/react-sliding-pane.css';

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.selectedWork = {id: null}
    this.state =  {
      selectedWork: '',
      isPaneOpen: false,
      isPaneOpenLeft: false
    }
    this.selectWork = this.selectWork.bind(this);
    this.count = 0
  }

  selectWork(work) {
    this.setState({
      selectedWork: work,
      id: this.state.id,
      isPaneOpenLeft: true
    });
  }

  render() {
    const paneResponsive = (
      <SlidingPane
        isOpen={ this.state.isPaneOpenLeft }
        title={this.state.selectedWork.name}
        from='right'
        width='100%'
        onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
        <div>
          <p><img src={this.state.selectedWork.img} alt={this.state.selectedWork.name} width="100%" /></p>
          <div className="work-content">
            <h4>{this.state.selectedWork.name}</h4>
            <p>{this.state.selectedWork.description}</p>
            <p>{this.state.selectedWork.tech}</p>
            <p>{this.state.selectedWork.involvement}</p>
            <a href={this.state.selectedWork.link}>{this.state.selectedWork.link}</a>
          </div>
        </div>
        <ScrollLock />
      </SlidingPane>
    )

    const fullSize = (
      <SlidingPane
        isOpen={ this.state.isPaneOpenLeft }
        title={this.state.selectedWork.name}
        from='right'
        width='50%'
        onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
        <div>
          <p><img src={this.state.selectedWork.img} alt={this.state.selectedWork.name} width="100%" /></p>
          <div className="work-content">
            <h4>{this.state.selectedWork.name}</h4>
            <p>{this.state.selectedWork.description}</p>
            <p>{this.state.selectedWork.tech}</p>
            <p>{this.state.selectedWork.involvement}</p>
            <a href={this.state.selectedWork.link}>{this.state.selectedWork.link}</a>
          </div>
        </div>
        <ScrollLock />
      </SlidingPane>
    )


    return (
      <div className="gallery" >
        {works.map((work) => (
          <div key={work.id} onClick={() => this.selectWork(work)}>
            <ShowCard {...work} />
          </div>
        ))}

        <MediaQuery query='(min-width: 800px)'>
          {fullSize}
        </MediaQuery>

        <MediaQuery query='(max-width: 800px)'>
          {paneResponsive}
        </MediaQuery>        

        <MediaQuery query='(max-device-width: 767px)'>
          {paneResponsive}
        </MediaQuery>        
      </div>
    );
  }
};

export default ImageList;