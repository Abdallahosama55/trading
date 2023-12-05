import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Bounce, Fade, Zoom } from 'react-reveal';
import './Testimonial.css'
import TitleBasic from '../../../components/TitleBasic/TitleBasic'
import ItemTestimonial from './ItemTestimonial';


import bgTestimonial from '../../../assets/test.png'
import person01 from '../../../assets/person01.jfif'
import person02 from '../../../assets/person02.jfif'
import person03 from '../../../assets/person03.jfif'
import person04 from '../../../assets/person04.jfif'
import person05 from '../../../assets/person05.jfif'
import person06 from '../../../assets/bgg2.png'
import Motion01 from '../../../assets/bgtestimonial01.png'
import Motion02 from '../../../assets/bg02.png'






const Testimonial = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const boxesData = [
    {
      description: 'your wealth management wallets focus on transparency and accountability, providing clients with tools for informed decisions, and supporting all traders in achieving their financial goals..',
      doctor: 'John Deo',
      patient: 'mohammed',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.',
      doctor: 'John Hed',
      patient: 'Ali',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.',
      doctor: 'Gala Ted',
      patient: 'Noor',
    },
  ];

  return (
    <>
      <div className='testimonial'>
        <div className='container'>
          <div className='titlemain'>
              <TitleBasic title = 'Testimonial'/>
          
              <Fade top>
              <h2 className=' text-dark'>See What Are The Customers Saying About us</h2>
              </Fade>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
            <Zoom >
              <div className='box thumb-wraper'>
                <img src={bgTestimonial} alt='img' className='img-fluid'/>
               
              </div>
              </Zoom>
            </div>
            <div className='col-lg-6'>
            
            <Bounce right>
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
                    </Bounce>
            </div>
         
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
