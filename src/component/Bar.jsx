import React from 'react'
import bar from '../Styles/Bar.module.css';
import { NavLink } from 'react-router-dom';
const Bar = () => {
  return (
    <div className={bar.main}>
         <h1 className={bar.h1}>PORTFOLIO</h1>
        <ul className={bar.ull}>
            <li className={bar.li}><NavLink className={bar.link} to="/about">About</NavLink></li>
            <li className={bar.li}><NavLink className={bar.link}  to="/projects">Projects</NavLink></li>
            <li className={bar.li}><NavLink className={bar.link}  to="/contact">Contact</NavLink></li>
        </ul>
    </div>
  )
}

export default Bar