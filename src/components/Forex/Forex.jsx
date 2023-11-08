import React, { Fragment ,useEffect } from 'react';
import CountUp, { useCountUp } from 'react-countup';

import { motion } from 'framer-motion';
import { Ticker} from "react-tradingview-embed";
import { Container } from 'react-bootstrap';


import {FaRegMoneyBillAlt} from 'react-icons/fa'

import {SlChart} from 'react-icons/sl'

import './Forex.css';

import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import img5 from '../../assets/5.png'
const Forex = () => {
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
      <div className='sec1-forex d-flex justify-content-center align-items-center'>
      <div className=' d-block'>
  
        <div className='row justify-content-center align-items-center'>
       
            <h1  className=''>  Account Management</h1>
            <p>
              To assist our clients in achieving their financial objectives, we provide thorough account management services on our wealth management website. Our team of knowledgeable financial advisors is committed to offering you specialized investment options that match your specific requirements and risk tolerance.
            </p>
        
        </div>
 <div className=' d-flex justify-content-center align-items-center'>
  <button className='btn btn-danger'>Contact us</button>
  </div>
  </div>
  
      </div>
      <div className='sec2-forex  p-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
            <h1 className='fw-bold'>$ 100 Challenge</h1>
            
          <p className=' text-muted  py-5 mt-2 '>Welcome to our $100 challenge, where we offer high-risk investment opportunities with the potential for a $1000 outcome within a month. This challenge is designed for clients who are willing to take on higher risk in exchange for the potential for higher return</p>
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
      <div className='container sec3-forex-container p-3  shadow rounded-3 '>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-4 col-sm-12 p-3'>
          <div className='p-2'>
          <SlChart size={70} color='grey'/>
          </div>
         <h3 className='text-muted fw-medium p-2 '>Easy Trading</h3>
    
          
          </div>
          <div className='col-md-4 col-sm-12 p-3'>
          <div className='p-2'>
     <FaRegMoneyBillAlt size={70} color='green' />
     </div>
          <h3 className='text-muted '>Fast Earn</h3>

          </div>
          <div className='col-md-4 col-sm-12 p-3'>
          <div className='p-2'>
          <AiOutlineSafetyCertificate size={70} color='darkblue'/>

          </div>

          <h3 className='text-muted  '>More Trausted</h3>
          </div>
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