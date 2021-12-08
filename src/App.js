import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import { useSpring, animated, useTransition } from 'react-spring';








function App() {

  const style1 = useSpring({
    from: {opacity: 0, marginTop: -100},
    to: { opacity: 1, marginTop: 0},
    config: {duration: 3000 }
})

const style2 = useSpring({
  from: { marginLeft: 0},
  to: { marginLeft: 900 },
  config: {duration: 3000 }
})





  return (
<div className="App">
  

      <animated.div style={style1}>
        <div className="topDiv">
        <small><NavbarComp/></small>
          <animated.div style={style2}>

            
            

            <h1>Welcome</h1>
            </animated.div>
        </div>
       </animated.div>
                               
      

    </div>




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