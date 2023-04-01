// /* eslint-disable react/jsx-no-undef */
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import MovieList from './pages/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
            
      <Routes>
                
        <Route path="/" element={<Layout />}>
                    
          <Route index element={<Home />} />
                    
          <Route path="/MovieList" element={<MovieList />} />
                    
          <Route path="/Podcast" element={<Podcast />} />
                    
        </Route>
              
      </Routes>
          
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
