import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import CV from './pages/CV';
import Chatbot from './components/Chatbot';
import './styles.css';

const App = () => (
  <Router>
    <div className="google-page">
      <header>
        <nav className="top-nav">
          <NavLink to="/projects" className="nav-item">Projects</NavLink>
          <NavLink to="/experience" className="nav-item">Experience</NavLink>
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
              <Chatbot />
              <div className="buttons">
                <button className="google-button">Search</button>
                <button className="google-button">I'm Feeling Lucky</button>
              </div>
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
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