import React, { useEffect } from 'react'
import './Home.css'
import Aboutus from './AboutUs/Aboutus'
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Testimonial from './Testimonial/Testimonial'
import News from './News/News'
import Navbar from '../../Components/Nav/Navbar';

import Categories from './Categories/Categories';
import { useState } from 'react'
import bgimg02 from '../../assets/Images/bg02.png'
import bgimg03 from '../../assets/Images/bg03.png' 
import bgimg04 from '../../assets/Images/bg04.png'
import bgimg05 from'../../assets/Images/about03.jpg'
import { Container } from 'react-bootstrap';
import BannerAds from './BannerAds/BannerAds'

const Home = () => {
  const [backgroundImagee, setBackgroundImage] = useState(bgimg05);




  return (
    <>
      <Navbar />
      <div className='header'>
        <div className='container'>
          <div className='row'>
          <div>
  <BannerAds/>
        </div>
          </div>
          <div className='img-bg'>
            <img src={bgimg02} alt='img' className='img02'/>
            <img src={bgimg03} alt='img' className='img03'/>
            <img src={bgimg04} alt='img' className='img04'/>
          </div>
        </div>
      </div>
      <Container className='mt-3 gy-4'>
      <div className='mt-3 gy-4'>
      <Categories/>
      <div className='mt-5'>
      <Link to="category">
      
      <h5 className=''>  View more Categories   <AiOutlineArrowRight size={25}/></h5>
    
      
      
   </Link>
  
      
      
      </div>
   
      </div>
      
      
      </Container>
     
      <Aboutus />
   


      <Testimonial />
   
      
     
    </>
  )
}

export default Home
