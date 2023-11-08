import React, { Fragment } from 'react'
import img_sec2 from '../../assets/4.png'
import { Container, Figure } from 'react-bootstrap'
import { motion } from 'framer-motion';

import Wave from 'react-wavify'
import { Link } from 'react-router-dom'

import ReactTyped  from  'react-typed'
import Services from '../../components/Services/Services'

import Works from '../../components/works/works'
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

function Exchange() {
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

  return (
    <Fragment>
    <div  className='mt-5 py-4'>

    
    </div>

    <div className='m-0 p-0 ' >
    <div className='  w-100  sec-1  '>
 <Container className='h-75  mb-5'>
 <div className='row   mt-5 py-md-5'>


  <div className='col-md-7 '>


  <div className='container py-5 header-text pe-md-3 py-md-5 justify-content-center align-items-center w-100 mt-md-5'>
  <Bounce>
  <div>
  <h1 className='text-warning'>Start mining today !</h1>
 <p className='w-75 py-3 fs-5 text-dark'> Our exchange service simplifies crypto transactions, offering a secure gateway between banks and digital assets, while providing seamless purchasing experiences for users. 

 </p>
 
</div>
</Bounce>
  </div>

  </div>
 <Zoom>
  <div className='col-md-5 col-sm-12 d-flex justify-content-center align-items-center '>

  
  <div style={{ overflow: 'hidden', width: '100%' }}>
  <motion.img
    src={require('../../assets/10 (2).png')}
    alt="Moving Image"
   
    style={{"width":"100%"}}
    initial="initial"
    animate="animate"
    variants={imageVariants}
  />
</div>

 
 

 </div>
 </Zoom>
 </div>
 
 
 
 </Container>
<div>
    <Wave fill='#191919'
    paused={false}
    style={{ display: 'flex' }}
    options={{
      height:10,
      amplitude: 20,
      speed: 0.45,
      points: 5
    }}
    
  />
  </div>


  <div className='pb-5 bg-dark sec-2 '>
  <Container >
  
  <div className='row  justify-content-center align-items-center  d-flex w-100'>
  <div className='col-md-6 col-xl-6  col-sm-12'>

  <img src={img_sec2} className='w-100 '></img>
  </div>

  <div className='col-md-6 col-xl-6 col-sm-12  '>
  <Fade>
  <div>
  <h3 className=' sec2-text'>
   <span className='text-warning span-word'>Bitcoin Mining </span>
    <ReactTyped strings={[" is a peer-to-peer computer process used to secure and verify bitcoin transactions—ayments from one user to another on a decentralized network.Mining involves adding bitcoin transaction data to Bitcoin’s global public ledger of past transactions."]} typeSpeed={75}  loopCount={60} loop  />
  </h3>
  
</div>
</Fade>

</div>

  
  </div>
  </Container>
    </div>
  <div>
 
  <Works/>

  </div>
  </div>
   </div>
    </Fragment>
  )
}

export default Exchange