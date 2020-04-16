import React from 'react';
import Card from './Card';
import dataPokemon from '../App';

const Nav = () => {
  return (
    <div>
      {dataPokemon.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Nav;
