import ram from './About.module.css'
import React, { useEffect } from 'react'
import { useState } from 'react';

const About = () => {

     

  return (
    <>

      <div className={ram.main}>
        
        <div className={ram.sub_main}>
           <div className={ram.bio}>
             <h1 className={ram.h1}>Hi there !</h1>
            
              <p className={ram.text}></p>
             
           </div>
           <div className={ram.picture}>
                    
            <div className={ram.handal}>
               
               <ul className={ram.ul2}>
                <li className={ram.li2}><a className={ram.as} target="blank" href="https://github.com/crushonpuchhu"><i className="fab fa-github"></i></a></li>
                <li className={ram.li2}><a className={ram.as} target="blank" href="https://www.linkedin.com/in/mittal-kumar-gupta-a18870249/"><i className="fab fa-linkedin"></i></a></li>
                <li className={ram.li2}><a className={ram.as} target="blank" href="https://www.facebook.com/mittalkumar.gupta.5/"><i className="fab fa-facebook"></i></a></li>
                <li className={ram.li2}><a className={ram.as} target="blank" href="https://www.instagram.com/m___i___t___t___a___l/"><i className="fab fa-instagram"></i></a></li>
                <li className={ram.li2}><a className={ram.as} href=""><i className="fas fa-at"></i></a></li>
               </ul>
           
            </div>

            <div className={ram.div2}>
               <ul className={ram.uls}>
                <li className={ram.lis}></li>
                <li className={ram.lis}></li>
                <li className={ram.lis}></li>
                <li className={ram.lis}></li>
               </ul>
            </div>
              <div className={ram.card}>
                   
                   

              </div>
           
             
           </div>




        </div>


      </div>
    </>

  )
}
 
export default About