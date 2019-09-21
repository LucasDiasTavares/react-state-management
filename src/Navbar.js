import React, { useContext } from 'react';
import { MovieContext } from './MovieListContex';

const Navbar = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      <h3>Lucas Tavares</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Navbar;
