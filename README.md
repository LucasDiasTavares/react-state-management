# React
React Studying

## learning-state-management
Learning the basics of state management. Here I'm doing a movie site. I have a list of objects:

### `
export const MovieProvider = props => {
  const [movies, setMovies] = useState([
{
  name: 'MovieName',
  price: 'MoviePrice',
  id: 123456789
},
{
  name: 'MovieName2',
  price: 'MoviePrice2',
  id: 1234567892
}
]);
`

To get access of this data in any part of my code i need to create a new file with the name like 'MovieContex.js', then import createContext.

### ` import React { createContext } from 'react';`

### `export const MovieContext = createContext();`

my return needs to be like this:
### `
return (
<MovieContext.Provider value={[movies, setMovies]}>
  {props.children}
</MovieContext.Provider>
);
  `


Now I need to open my App.js and:
### `import { MovieProvider } from './MovieListContex';`

So now I wrap every thing that need to use this information.
### `
function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Navbar />
        <MovieList />
      </div>
    </MovieProvider>
  );
}
`

OK, but how can I access this information throgh the others components?

Easy, back to my MovieList.js
### `
import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieListContex';
`

### `const MovieList = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};
`

## Another example in my Navbar.js

In this little project I have learned it.

### Important: My big problem here is when I create a new movie, updates all the components wrapped.

======================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.