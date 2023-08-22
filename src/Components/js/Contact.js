import React from 'react'

const Contact = () => {
  return (
    <div id='contactus' className='contactus'>
    <h1 >CONTACT US</h1>
    <div className='contact'>  
        <div className='contactDetails ' style={{width:'50%'}}>
            <form>
                <input type="text" placeholder='First Name'/><br /><br />
                <input type="text" placeholder='Last Name'/><br /><br />
                <input type="tel" placeholder='Phone no'/><br /><br />
                <input type="email" placeholder='Email id'/><br /><br />
                <button>Submit</button>
            </form>
         </div>
        <div className='contactImage'>
            <img src='https://img.freepik.com/premium-photo/blue-background-with-face-with-face-that-says-ai_894855-2629.jpg' alt='aboutimage' className='aboutimage'/>
        </div>
    </div>
    </div>
  )
}

export default Contact