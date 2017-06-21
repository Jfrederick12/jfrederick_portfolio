import React from 'react';

const ShowCard = (props) => (
  <div className="work-image" style={{backgroundImage: `url(${props.thumbnail})`}}>
  	<div>
  	  <h2>{props.name}</h2>
    </div>
  </div>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  img: string.isRequired,
  name: string.isRequired,
  thumbnail: string.isRequired
}

export default ShowCard;

  // <figure>
  //   <span className="shadow">{props.name}</span>
  //   <img src={props.thumbnail} alt={props.name} height="225px" width="800px" />
  // </figure>