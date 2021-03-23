import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ backgroundImage: "url(/background.jpg)" }} className="App-header">
        <p>What to EAT?</p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dont Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
