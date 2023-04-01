import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './blah';
import MovieList from './Movies';

function App() {
  return (
    <div className="App">
      <TopBanner saying="Joel Hilton's Movie Collection" />
      <MovieList />
    </div>
  );
}

export default App;
