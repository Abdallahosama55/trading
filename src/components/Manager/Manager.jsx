import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Testimonial.css'
import TitleBasic from '../../components/TitleBasic/TitleBasic'
import ItemTestimonial from './ItemTestimonial';


import bgTestimonial from '../../assets/manager.png'
import { Fade } from 'react-reveal';





const Manager = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const boxesData = [
    {
      description: 'Our core philosophy is centered around the belief that everyone deserves access to sound financial advice and investment opportunities, regardless of their background or experience. We strive to create a welcoming and inclusive environment that empowers our clients to make informed investment decisions and take control of their financial future.',
      doctor: '',
      patient: '',
    },

  ];

  return (
    <>
      <div className='testimonial '>
        <div className='container'>
        <Fade top>
          <div className='titlemain'>
              <TitleBasic title = 'Founder & CEO'/>
              <h2 className=' text-dark'>Care values and beliefs for your business</h2>
          </div>
          </Fade>
          <div className='row'>
          
            <div className='col-lg-7 '>
            <div className=' container'>
            
            
            <Slider {...settings}>
            {boxesData.map((box, index) => (
              <ItemTestimonial
                key={index}
                description={box.description}
                doctor={box.doctor} 
                patient={box.patient}
              />
              ))}
          </Slider>
            </div>
          
            </div>
            <Fade right>
            <div className='col-lg-4'>
            <div className='box thumb-wraper justify-content-center d-flex w-100 '>
              <img src={bgTestimonial} alt='img' className='img-fluid '/>
             
            </div>
          </div>
          </Fade>
         
          </div>
        </div>
      </div>
    </>
  )
}

export default Manager
