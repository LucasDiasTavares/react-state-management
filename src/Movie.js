import React from 'react';

const Movie = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <h5>{props.id}</h5>
    </div>
  );
};

export default Movie;
