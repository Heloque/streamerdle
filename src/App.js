import logo from './colordle-logo.png';
import Home from './layout/Home.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Home/>
    </div>
  );
}

export default App;
