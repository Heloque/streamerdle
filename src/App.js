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
      </header>
      <main>
        <Home dailyElement={dailyElement}/>
      </main>
      <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Louis Thomas, Quentin Roussey, Héloïse Suat. All rights reserved.</p>
        <p>Version: {version}</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
