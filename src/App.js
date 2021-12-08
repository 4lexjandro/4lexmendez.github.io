import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import logo from './components/Alex.jpg';


//Step 1: Define a component
function App() {
  //Step 2: Return some JSX
  return (


    <div className="App">
      <NavbarComp/>
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















    /*<div className="App">
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
    </div>*/
  );
}

export default App;



//Anything major - git add * 
// Git status 
// Git commit -m "message here" 
//Git push

//Git log (commit history)
//GIT CHECKOUT "BRANCH NAME" - Switches branches
//Git pull to pull branches
//Git merge PadInput/ or branch name

//Source control in VS accept current changes for package-lock.json