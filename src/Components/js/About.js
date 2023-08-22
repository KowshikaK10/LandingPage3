import React from 'react'

export const About = () => {
  return (
    <div id='about' className='pt-5'>
    <h1 className='p-5'>ABOUT US</h1>
    <div className='firstpage'>  
        <div className='aboutDetails' style={{width:'50%'}}>
            <h1>Rapidops is one of the fastest-growing digital, data, and AI companies in the US.</h1>
            <p>Since 2008, we are trusted by industry leaders, unicorns, and entrepreneurs to build mission-critical software platforms and solutions.
             We have delivered billions in revenue and created category leaders.</p>
             <p>Whether it’s a new product opportunity, a multi-year transformation initiative, or a tough data challenge, 
            we turn complexity into clear strategy, focus on the right problems and build future-proof
            products - all while creating value for both end customers and business in weeks not months.</p>
         </div>
        <div className='aboutImage' style={{width:'50%',height:'50%'}}>
            <img src='https://cdn.pixabay.com/photo/2023/05/07/05/16/ai-generated-7975586_1280.png' alt='aboutimage' className='aboutimage'/>
        </div>
    </div>
    </div>
  )
}
