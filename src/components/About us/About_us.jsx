import React from 'react'
import Testimonial from '../Home/Testimonial/Testimonial'
import Aboutus from '../Home/AboutUs/Aboutus'
import Manager from '../Manager/Manager'

function About_us() {
  return (
    <div>
    
   
    <div className=' bg-warning'>
    
    <Aboutus></Aboutus>
    </div>
    <div className='container'>
   <Manager/>
    
    </div>
    
    </div>
  )
}

export default About_us