import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from "react-router-dom";
import { useEffect } from "react";
import'./BannerAds.css'
import { motion } from 'framer-motion';
import { BsTag } from "react-icons/bs";
import img_icon from '../../../assets/ads.svg';
import ReactTyped  from  'react-typed'

import Slider from 'react-slick';
import { Zoom } from 'react-reveal';

function BannerAds() {
  const imageVariants = {
    initial: {
      y: '0%',
    },
    animate: {
      y: [-10, 10, -10, 0],
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        prevArrow: null, // Hide the previous arrow
        nextArrow: null, // Hide the next arrow
      };


  return (
    <div>
  
    <Slider {...settings}>
    
    <div>
{/*<img src={require('../../../assets/bgg2.png')} alt='Background Image' className='background-image' /> */}
    
    <div className=''>
    <div className='row justify-content-center align-items-center'>
    <Zoom>

    <div className='col-md-7 col-sm-12 banner-text '> 
    <h1 className='header-text'>
    
    <ReactTyped strings={["AHA MARKET is a partner with the best broker, Vantage "]} typeSpeed={50}   noloop  />
    
    </h1>
    <p>All forex services that you provide are through an approved broker, which is the best in all respects for deposit, withdrawal and automatic copying services.

    To register, use the link below</p>
    <a href='https://www.vantagemarkets.com/open-live-account/?affid=MTgwMTMxNw%3D%3D'>
    <button className=' btn btn-warning rounded-5 '>Register Now</button>
    </a>
    </div>
    </Zoom>
    <div className='col-md-4 col-sm-12  pb-5'>  
<div className='d-flex justify-content-center align-items-center '>
    <div class="d-flex justify-content-center align-items-center ">
   
    <motion.img
      src={require('../../../assets/crypto-bg-img.webp')}
      alt="Moving Image"
      style={{ width: '100%' }}
      initial="initial"
      animate="animate"
      variants={imageVariants}
    />


</div>

</div>



  
  
  </div>
   
    </div>
     
    </div>
  </div>


  
     
  
 



     
   
    </Slider>
       
    
    </div>
  )
}

export default BannerAds