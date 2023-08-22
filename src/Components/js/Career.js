import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Career = () => {
  return (
    <div className='careerDI' id='career'>
   <h1>CAREERS</h1>
    <div className='career pt-3 pb-3' >
        <div className="careerImage" style={{width:'50%'}}>
            <img src='https://imageio.forbes.com/specials-images/imageserve/64213c10fc7ed6f0a3eb47ae/The-Intersection-Of-AI-And-Human-Creativity--Can-Machines-Really-Be-Creative-/960x0.jpg?height=473&width=711&fit=bounds'className='aboutimage' alt='cimage'/>
        </div>
        <div className="careeerDetail">
            <h2>Small teams empowered to create big impact.</h2>
            <p>We are defined by our people, passion and culture. We’re not only building the best software but also breeding industry’s best talent - people <br></br>who can dream, drive and deliver. Here are the core values that we live by.</p>
            <h3>We’re hiring!</h3>
            <button className='homeButton'>Open Positions <FaArrowRight /></button>
        </div>

    </div>
    </div>
  )
}

export default Career