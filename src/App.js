import logo from './streamerdle_logo.png';
import Home from './layout/Home.js';
import getDailyElement from './utils/randomColor';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();
  const version = "1.0.0";
  const dailyElement = getDailyElement();

  return (
    <div className="App quadrillage">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span style={{fontWeight: "bold"}}>STREAMERDLE #{1}</span>
        <a href="https://colordle.fr" target="_blank" rel="noopener noreferrer" className="play-button">Jouer à Colordle</a>
      </header>
      <main>
        <Home dailyElement={dailyElement}/>
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
