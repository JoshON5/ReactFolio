// import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Header />
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/projects' element={<Project/>}/>
        <Route exact path='/contact' element={<Contact/>}/> 
      </Routes>
    </Router>
      <Footer />
      </>
  )
}