import React, { useEffect } from 'react'
import './Home.css'
import Aboutus from './AboutUs/Aboutus'
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Testimonial from './Testimonial/Testimonial'

import Categories from './Categories/Categories';
import { useState } from 'react'
import bgimg02 from '../../assets//bg02.png'
import bgimg03 from '../../assets//bg03.png' 
import bgimg04 from '../../assets//bg04.png'
import bgimg05 from'../../assets/about03.jpg'
import { Container } from 'react-bootstrap';
import BannerAds from './BannerAds/BannerAds'
import { Zoom } from 'react-reveal';
import Services from '../Services/Services';

const Home = () => {




  return (
    <>

      <div className='header'>
        <div className='container'>
          <div className=''>
          <div>
         
  <BannerAds/>

        </div>
          </div>
      
        </div>
      </div>
      <div>
      <div >
      <div className=' bg-warning'>
      <Container>
      
      <Categories/>
      </Container>
     
      </div>
      <div className='mt-5'>
  <Services/>
      
      
      </div>
   
      </div>
      
      <div>
      
      
      
      </div>
      </div>
     <div className=' bg-warning'>
     <Aboutus />
     </div>
      
   


      <Testimonial />
   
      
     
    </>
  )
}

export default Home
