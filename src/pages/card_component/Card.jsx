import React from "react";
import card from './card.module.css'



const Card = () => {


    return (
        <>
            <div className={card.main}>

                <div className={card.fram}>
                    <div className={card.lang}>
                       <h4>React</h4>
                    </div>
                    <div className={card.disc}>
                      <div className={card.tital}><h3>weather app</h3></div>
                      <div className={card.discription}><p className={card.d}>This is a dynamic weather updatyte website</p></div>
                      <div className={card.date}><p className={card.dat} >12/06/2022-to-14/06/2022</p></div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Card