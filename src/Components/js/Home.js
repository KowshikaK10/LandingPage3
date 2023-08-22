import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className='firstpage' id='home'>      
         <div className="homeimage">
         </div>
         <div className='home'>
            <h1 className='homeh1'>We’re a software and services company that builds
             and transforms businesses using advanced technology, data, and AI.</h1>
            <button className='homeButton'>Who we are &nbsp;<FaArrowRight /></button>
         </div>
    </div>
   
  )
}

export default Home