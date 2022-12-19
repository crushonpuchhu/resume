import pro from './Project.module.css';
import React from 'react'
import axios from 'axios';
import Card from '../card_component/Card';
import { useState } from 'react';
  
const Project = () => {
 //const val={lan:"mittal",tital:"Weather app",dic:"This is a dynamic weather app this application show current weather candation of any place as well as its show your current loction","datee":"12/12/2022-15/12/2022"};

  const [arry,setar]=useState([]);

 // const arry=[{lan:"React",tital:"Weather app",dic:"This is a dynamic weather app this application show current weather candation of any place as well as its show your current loction",datee:"12/12/2022-15/12/2022"},{lan:"Html,css,js",tital:"Otp verification ui",dic:"This is a simpale otp verification user interface",datee:"29/11/2022-30/11/2022"},]
   /*  function po()
     {
       axios("http://localhost:8080/posts",val);
     }
     po();
     */

   const data=axios("http://localhost:8080/posts");
   const download= async()=>{
          const data1= await data;
          setar(data1.data);
   }

   download();


  return (
    <div className={pro.main}>

   {
       
      arry.map((e,i)=>{
        return <Card key={i} la={e.lan} ti={e.tital} di={e.dic} din={e.datee} g={e.git} l={e.link} s={e.status}/>
      })

   }
      
      
    


    </div>
  )
}

export default Project