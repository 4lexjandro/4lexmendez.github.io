import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Highlights from "./Highlights";
import Projects from "./Projects";





/*


Add this for highlights and projects 




<Route path="/highlights">
            <Highlights />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>
          
          
          */


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
               <Navbar bg="dark" variant={"dark"}expand="lg">
  <>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
        <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
        <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
        <Nav.Link as={Link} to={"/highlights"}>Highlights</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </>
</Navbar>
                
            </div>
            <div>
            <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/highlights">
            <Highlights />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

            </div>
            </Router>
        )
    }
}
