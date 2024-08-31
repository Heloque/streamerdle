import logo from './streamerdle_logo.png';
import Game from './layout/Game.js';
import Home from './layout/Home.js';
import getDailyElement from './utils/elementGetter.js';
import getRandomElement from './utils/elementGetter.js';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  
  const [mod, setMod] = useState("home");
  const currentYear = 2024;
  const version = "1.0.0";  

  return (
    <div className="App quadrillage">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span style={{fontWeight: "bold"}}>STREAMERDLE</span>
        <a href="https://colordle.fr" target="_blank" rel="noopener noreferrer" className="play-button">Jouer à Colordle</a>
      </header>
      <main>
        {mod === "home" && (
          <Home setMod={setMod}/>
          )
        }
        {mod === "daily" && (
          <Game chosenElement={getDailyElement()} mod={mod} setMod={setMod}/>
          )
        }
        {mod === "infinite" && (
          <Game chosenElement={getRandomElement()} mod={mod} setMod={setMod}/>
          )
        }
                  

      </main>
      <footer className="footer">
      <div className="footer-content">
        <p>
          © {currentYear}
          <a href="https://www.linkedin.com/in/louis-thomas-3775a21b5/" target="_blank" rel="noopener noreferrer" className="footer-link">Louis</a>,
          <a href="https://www.linkedin.com/in/quentin-roussey/" target="_blank" rel="noopener noreferrer" className="footer-link">Quentin</a>,
          <a href="https://www.linkedin.com/in/héloïse-suat-8ab266227/" target="_blank" rel="noopener noreferrer" className="footer-link">Héloïse</a>. All rights reserved.
        </p>
        <p>Version: {version}</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
