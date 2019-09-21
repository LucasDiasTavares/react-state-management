import React, { useState, createContext, useContext } from 'react';
import { MovieContext } from './MovieListContex';

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setname] = useState('');
  const [price, setprice] = useState('');

  const updateName = e => {
    setname(e.target.value);
  };
  const updatePrice = e => {
    setprice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <form onSubmit={addMovie}>
      <input type='text' name='name' value={name} onChange={updateName} />
      <input type='text' name='price' value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
