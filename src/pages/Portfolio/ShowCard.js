import React, { Component } from 'react';

const ShowCard = (props) => (
  <figure>
    <img src={props.thumbnail} alt={props.name} height="225px" width="300px" />
    <h1 className="">this</h1>
  </figure>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  img: string.isRequired,
  name: string.isRequired,
  thumbnail: string.isRequired
}

export default ShowCard;