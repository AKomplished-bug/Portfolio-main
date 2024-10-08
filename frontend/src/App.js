import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import CV from './pages/CV';
import axios from 'axios';
import './styles.css';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const result = await axios.post('https://api.athul.live/api/chat', { query });
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('An error occurred while fetching the response.');
    }
    setLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input 
          type="text" 
          className="search"
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          onKeyDown={handleKeyDown} // Add this line
          placeholder="Ask about Athul's resume..."
        />
        <button className="search-button" onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {response && (
        <div className="response-container">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <Router>
    <div className="google-page">
      <header>
        <nav className="top-nav">
          <NavLink to="/projects" className="nav-item">Projects</NavLink>
          <NavLink to="/achievements" className="nav-item">Achievements</NavLink>
          <NavLink to="/cv" className="nav-item">CV</NavLink>
        </nav>
      </header>
      <main>
        <div className="logo">
          <NavLink to="/">
            <span className="blue">A</span>
            <span className="red">t</span>
            <span className="yellow">h</span>
            <span className="blue">u</span>
            <span className="green">l</span>
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <SearchComponent />
              <div className="buttons">
                <button className="google-button">Search</button>
                <button className="google-button">I'm Feeling Lucky</button>
              </div>
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </main>
      <footer>
        <div className="footer-links">
          <a href="/home">About</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  </Router>
);

export default App;
