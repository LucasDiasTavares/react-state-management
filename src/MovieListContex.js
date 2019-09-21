import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: 'MovieName',
      price: 'MoviePrice',
      id: 123456789
    },
    {
      name: 'Game of Thrones',
      price: '$15',
      id: 2561222
    },
    {
      name: 'Inception',
      price: '$10',
      id: 235255
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
