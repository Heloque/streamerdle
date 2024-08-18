import logo from './colordle-logo.png';
import Home from './layout/Home.js';
import getDailyElement from './utils/randomColor';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();
  const version = "0.0.1";
  const dailyElement = getDailyElement();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Home dailyElement={dailyElement}/>
      </body>
      <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} J-M. Bigras. All rights reserved.</p>
        <p>Version: {version}</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
