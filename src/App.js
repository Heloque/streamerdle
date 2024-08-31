import logo from './streamerdle_logo.png';
import Home from './layout/Home.js';
import getDailyElement from './utils/elementGetter.js';
import getRandomElement from './utils/elementGetter.js';
import './App.css';

const Display = {
	Home: 0,
	Daily: 1,
	Infinite: 2,
}

currentDisplay = Display.Daily;

function ChoseDisplay() {
  switch (currentDisplay) {
    case Display.Home:
      return;

    case Display.Daily:
      const dailyElement = getDailyElement();
      return <Home dailyElement={dailyElement}/>

    case Display.Infinite:
      const randomElement = getRandomElement();
      return <Home dailyElement={randomElement}/>
  
    default:
      return;
  }
}

function App() {
  
  const currentYear = new Date().getFullYear();
  const version = "1.0.0";
  

  return (
    <div className="App quadrillage">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span style={{fontWeight: "bold"}}>STREAMERDLE #{1}</span>
        <a href="https://colordle.fr" target="_blank" rel="noopener noreferrer" className="play-button">Jouer à Colordle</a>
      </header>
      <main>
        
        <ChoseDisplay/>
        
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
