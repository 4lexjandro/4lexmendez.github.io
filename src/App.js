import logo from './Alex.jpg';
import './App.css';


//Step 1: Define a component
function App() {
  //Step 2: Return some JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Alex and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/4lexmendez"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
