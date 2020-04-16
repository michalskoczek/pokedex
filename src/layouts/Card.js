import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';

const Card = ({ pokemon }) => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          className="image-container__image"
          src={pokemon.sprites.front_default}
        />
      </div>
      <div className="description">
        <h5 className="description__title">{pokemon.name.toUpperCase()}</h5>
        <p className="description__type">{pokemon.types[0].type.name}</p>
      </div>
    </div>
  );
};

export default Card;
