import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Navbar from './Navbar';
import AddMovie from './AddMovie';
import { MovieProvider } from './MovieListContex';

function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Navbar />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
