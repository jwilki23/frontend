import React from 'react';
import './App.css';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import { Link, Route, Routes } from 'react-router-dom';
import Podcast from './pages/Podcast';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Podcast">Podcast</Link>
          </li>
          <li>
            <Link to="/MovieList">Film Collection</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/MovieList" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;
