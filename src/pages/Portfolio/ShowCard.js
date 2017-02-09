import React, { Component } from 'react';

const ShowCard = (props) => (
  <img src={props.img} alt={props.name} height="225px" width="300px" />
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  img: string.isRequired,
  name: string.isRequired
}

export default ShowCard;