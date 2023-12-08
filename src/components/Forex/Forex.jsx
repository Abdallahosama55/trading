import React, { Fragment ,useEffect } from 'react';

import { motion } from 'framer-motion';
import { Ticker} from "react-tradingview-embed";
import { Container } from 'react-bootstrap';

import {FaRegMoneyBillAlt} from 'react-icons/fa'

import {SlChart} from 'react-icons/sl'

import './Forex.css';

import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import img5 from '../../assets/5.png'
import { Bounce, Fade, Zoom } from 'react-reveal';
const Forex = () => {

  const features=[
{
  image:  require('../../assets/ac.png'),
  title: 'Easy Trading',
},
{
  image: require('../../assets/aa.png'),
  title: 'Fast Earn',
},
{
  image:require('../../assets/ab.png'),
  title: 'More Trausted',

},



];

  const imageVariants2 = {
    initial: {
      y: '0%',
    },
    animate: {
      y: [-30, 30, -30, 0],
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };
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

    useEffect(() => {
        // Your other code here
      }, []);
    
      const handleTickerError = (error) => {
        console.error(error);
      };
    
  return (
    <Fragment>
      <div className='sec1-forex d-flex justify-content-center align-items-center '>

      <div className=' d-block'>
  
        <div className='row justify-content-center align-items-center '>


        <div className='col-md-2 mt-2 col-sm-4 '>
        <img src={require('../../assets/account.png')} className=' w-100 ms-4  d-md-none' ></img>
        <div style={{ overflow: 'hidden', width: '100%' }}>
        <motion.img
          src={require('../../assets/Template Source (1).psd (1366 x 768 بيكسل).png')}
          alt="Moving Image"
          className="moving-image d-none d-md-block"
          initial="initial"
          animate="animate"
          variants={imageVariants2}
        />
      </div>
   
        </div>
        <div className='col-md-8'>
       <Zoom>
    
            <h1  className='  text-warning text-center'>  Account Management</h1>
            </Zoom>
            <Fade>
            <p className=' w-100 '>
              To assist our clients in achieving their financial objectives, we provide thorough account management services on our wealth management website. Our team of knowledgeable financial advisors is committed to offering you specialized investment options that match your specific requirements and risk tolerance.
            </p>
            </Fade>
            <div className=' d-flex justify-content-center align-items-center'>
  <button className='btn btn-warning'>Contact us</button>
  </div>
            </div>
        
            <div className='col-md-2 mt-2 col-sm-12 '>
          
            <div style={{ overflow: 'hidden', width: '100%' }}>
            <motion.img
              src={require('../../assets/Template Source (1).psd (1366 x 768 بيكسل).png')}
              alt="Moving Image"
              className="moving-image d-none d-md-block"
              initial="initial"
              animate="animate"
              variants={imageVariants2}
            />
          </div>
       
            </div>
        </div>
 
  </div>
  
      </div>
      <div className='sec2-forex  p-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
            <Fade top>
            <h1 className='fw-bold text-warning'>$ 100 Challenge</h1>
            </Fade>
            <Fade left>
          <p className=' text-muted  py-5 mt-2 '>Welcome to our $100 challenge, where we offer high-risk investment opportunities with the potential for a $1000 outcome within a month. This challenge is designed for clients who are willing to take on higher risk in exchange for the potential for higher return</p>
          </Fade>
          </div>
            <div className='col-md-8 col-sm-12'>
            

            <div style={{ overflow: 'hidden', width: '100%' }}>
            <motion.img
              src={img5}
              alt="Moving Image"
              className="moving-image"
              initial="initial"
              animate="animate"
              variants={imageVariants}
            />
          </div>
      
            </div>
          </div>
        </div>
      </div>
     
      <div className='sec3-forex  p-5 m-3'>
      <h1 className='p-5 text-center text-muted fw-semibold '>About <span className=' text-warning '>Trading</span> forex </h1>
      <div className='container sec3-forex-container   shadow rounded-3 '>
        <div className='row d-flex justify-content-center align-items-center'>
        {features.map((feature, index) => (
     <Zoom>
          <div key={index} className=' col-md-4 col-sm-12 p-3'>
          <div className='p-2'>
          <img src={feature.image} width={125}/>
          </div>
         <h3 className='text-muted fw-medium p-2 '>{feature.title}</h3>
    
          
          </div>
          </Zoom>
          ))}
     
        </div>
        
      </div>
      
    </div>

    </Fragment>
    
  );
  const ErrorBoundary = ({ onError, children }) => {
    try {
      return children;
    } catch (error) {
      onError(error);
      return null;
    }
  };
};

export default Forex;