import React from "react";
import card from './card.module.css'



const Card = ({ la,ti, di, din,g,l,s}) =>{
   

    return (
        <>
            <div className={card.main}>

                <div className={card.fram}>
                    <div className={la==="React"?card.lang:card.lang2}>
                       <div className={card.h34}>
                       <div className={card.ic1}><a className={card.go1} target="_blank" href={g}><i className="fa-brands fa-github"></i></a></div>
                       <div className={card.ic2}><a className={card.go} target="_blank" href={l}><i className="fa-solid fa-link"></i></a></div>
                       </div>
                    </div>
                    <div className={card.disc}>
                      <div className={card.tital}><h3 className={card.run1}>{ti}</h3> <div className={s!==""?(s==="d"?card.done:card.working):card.incomplet}></div></div>
                      <div className={card.discription}><p className={card.d}>{di}</p></div>
                      <div className={card.date}><p className={card.dat} >{din}</p></div>
                    </div>
                </div>
                

            </div>
        </>
    )
}
export default Card