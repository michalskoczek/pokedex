import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { getPokemon, getPoke } from './handle/pokemon';
import Card from './layouts/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './Components/Spinner';
import Header from './layouts/Header.js';
import Button from './Components/Button.js';

const App = () => {
  const [dataPokemon, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const API = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchDataPokemn() {
      let response = await getPokemon(API);
      setNextUrl(response.next);
      setPreviousUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchDataPokemn();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  };

  const previous = async () => {
    if (!previousUrl) return;
    setLoading(true);
    let data = await getPokemon(previousUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPoke(pokemon.url);
        return pokemonRecord;
      }),
    );

    setPokemonData(_pokemonData);
  };
  return (
    <>
      <Header />
      <div className="buttons">
        <Button title="previous" name="push_button red" click={previous} />
        <Button title="next" name="push_button blue" click={next} />
      </div>
      <div className="wrapper">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {dataPokemon.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default App;
