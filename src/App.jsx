// import { useState } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Nav from "./components/Nav"
// import Home from "./components/Home"
// import Header from "./components/Header"
// import About from "./components/About"
// import Project from "./components/Project"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
import './App.css'

export default function App() {
  return (
    <Router>
      <Nav />
      {/* <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
          <Project />
        </Route>
        <Route path='/contact'> 
        </Route>
      </Switch> */}
    </Router>
  )
}