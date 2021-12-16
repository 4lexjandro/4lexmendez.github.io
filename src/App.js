import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import { useSpring, animated} from 'react-spring';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Cookies from 'js-cookie'
import AuthApi from "./components/AuthApi";

function App() {

  const style1 = useSpring({
    from: {opacity: 0, marginTop: -100},
    to: { opacity: 1, marginTop: 0},
    config: {duration: 3000 }
})

  const style2 = useSpring({
  from: { marginLeft: 0},
  to: { marginLeft: 1300 },
  delay: 1600,
  config: { duration: 3000 }
})




const Login = () => {

  const Auth = React.useContext(AuthApi)
  const handleOnClick = () =>{
  Auth.setAuth(true);
  Cookies.set("user","loginTrue")
  }
  return(
    <div>
     
      
      <h1>Log in here</h1>
      <button onClick={handleOnClick}>Login</button>
      
    </div>
  )
}


const Dashboard = () => {
const Auth = React.useContext(AuthApi)
const handleOnClick = ()=>{
    Auth.setAuth(false);
    Cookies.remove("user");
  }
  return(
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleOnClick}>Logout</button>
    </div>
  )
}


const Routes = () =>{
  const Auth = React.useContext(AuthApi)
  return(
    <Switch>
      <ProtectedLogin path="/login" component={Login} auth={Auth.auth}/>
      <ProtectedRoute path="/Dashboard" auth={Auth.auth} component={Dashboard}/>
    </Switch>
  )
}

const ProtectedRoute = ({auth,component:Component,...rest}) =>{
  return(
    <Route
    {...rest}
    render ={()=>auth?(
      <Component/>
    ):
    (
      <Redirect to="/login"/>
    )
  }
    /> 
     )
}


const ProtectedLogin = ({auth,component:Component,...rest}) =>{
  return(
    <Route
    {...rest}
    render ={()=>!auth?(
      <Component/>
    ):
    (
      <Redirect to="/dashboard"/>
    )
  }
    /> 
     )
}


const [auth, setAuth] = React.useState(false);

const readCookie = () => {
  const user = Cookies.get("user");
  if (user) {
    setAuth(true);
  }
}

React.useEffect(() => {
  readCookie();
}, []) 
    


return (
<div className="App">
      <animated.div style={style1}>
        <div className="topDiv">
        <small> <NavbarComp /> </small>
          <animated.div style={style2}>
            <br/>
            <br/>
            <br/>
            <h5>Welcome to my page!</h5>
            </animated.div>
        </div>
       </animated.div>  


       <div className="boxLeft">
         <AuthApi.Provider value={{auth, setAuth}}>
           <Router>
             <Routes/>
           </Router>
         </AuthApi.Provider>
         
       </div>
       
       
       
    </div>
   
   //7:26
    
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