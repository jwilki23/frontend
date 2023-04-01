import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
         
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
                      <Link to="/">Home</Link>
                    
          </li>
                  
          <li class="nav-item">
                      <Link to="/Podcast">Podcast</Link>
                    
          </li>
                  
          <li class="nav-item">
                      <Link to="/MovieList">Film Collection</Link>
                    
          </li>
        </ul>
      </div>
                          
    </nav>
  );
}

export default Navbar;
