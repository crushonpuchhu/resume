import React from 'react'
import nav from '../Styles/Navbar.module.css';
import Bar from './Bar';
import {Routes,Route} from 'react-router-dom';
import About from '../pages/Info/About';
import Project from '../pages/project/Project';
import Contact from '../pages/Contact/Contact';

const Navbar = () => {

  
  return (
    <>
    <div className={nav.main}>
      <Bar/>
      <Routes>
      <Route path="/" element={<About/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/projects" element={<Project/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    
    </div>
   
    </>
    
  )
}

export default Navbar