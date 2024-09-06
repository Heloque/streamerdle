import logo from './streamerdle_logo.png';
import Layout from './layout/Layout.js';
import './App.css';
import React from 'react';

function App() {
  const currentYear = 2024;
  const version = "1.1.2";  

  return (
    <div className="App quadrillage">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Layout/>
      </main>
      <footer className="footer">
      <div className="footer-content">
        <p>
          © {currentYear}
          <a href="https://www.linkedin.com/in/louis-thomas-3775a21b5/" target="_blank" rel="noopener noreferrer" className="footer-link">Louis</a>,
          <a href="https://www.linkedin.com/in/héloïse-suat-8ab266227/" target="_blank" rel="noopener noreferrer" className="footer-link">Héloïse</a>. All rights reserved.
        </p>
        <p>Version: {version}</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
