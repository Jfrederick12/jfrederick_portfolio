import React from 'react';

const ShowCard = (props) => (
  <figure>
    <span className="shadow">{props.name}</span>
    <img src={props.thumbnail} alt={props.name} height="225px" width="800px" />
  </figure>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  img: string.isRequired,
  name: string.isRequired,
  thumbnail: string.isRequired
}

export default ShowCard;