import React, { Fragment } from 'react'
import { Container, Figure } from 'react-bootstrap'
import img_contact from '../../assets/ABcontact.svg'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
function Contactus() {
  const imageVariants = {
    initial: {
      x: '0%',
    },
    animate: {
      x: '20%',
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };
const sendEmail=(e)=>{
  e.preventDefault();
  alert("submited")
  emailjs.sendForm('service_og6l3wn','template_djh2iqu',e.target,'pVC8DPr9-5T5xD0ro')

}
  return (
    <Fragment>
    <div className=''>

    <Container className=' shadow rounded-1 mt-5 mb-3  p-5'>
    <div className=' row'>
    <div className='col-md-6'>
    

    <div style={{ overflow: 'hidden', width: '100%' }}>
    <motion.img
      src={img_contact}
      alt="Moving Image"
      style={{ width: '100%' }}
      initial="initial"
      animate="animate"
      variants={imageVariants}
    />
  </div>

  

    

    
    </div>
    <div className='col-md-6'>
    <h1 className='p-3 fw-bold text-muted'>Contact <span className='text-warning'>Us</span></h1>
    <form onSubmit={sendEmail}>
    <div className="form-group mt-3">
  <div className=' row '>
  <div className=' col-1'></div>
  <div className=' col-11'><input type="text" name="name" className="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/></div>
  </div>
  </div>
  <div className="form-group mt-3">
  <div className=' row'>
  <div className=' col-1'></div>
  <div className=' col-11'><input type="email"  name="email_from" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email"/></div>
  </div>
  </div>
  <div className="form-group mt-3">
  <div className=' row'>
  <div className=' col-1'></div>
  <div className=' col-11'>  <div class="form-group">

    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" placeholder="Write your massage here" rows="3"></textarea>
  </div></div>
  </div>
  </div>

    
 <div className=' d-flex justify-content-center align-items-center mt-5  '>
 
 <button type="submit" className="btn btn-dark">Submit</button>
 </div>
    
  </form>

    

    
    
    
    
    
    
    </div>
    
    </div>
    
    
    </Container>
    </div>
    
    </Fragment>
  )
}

export default Contactus