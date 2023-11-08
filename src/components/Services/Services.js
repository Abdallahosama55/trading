import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fade} from 'react-reveal';
import { Zoom} from 'react-reveal';
import './Services.css'
import ItemOne from '../ItemOne/ItemOne';

import TitleBasic from '../TitleBasic/TitleBasic';
import{AiOutlineSafetyCertificate}from 'react-icons/ai'
import {MdOutlineAttachMoney}from 'react-icons/md'
import {RiMoneyEuroCircleLine}from 'react-icons/ri'
import{MdOutlineToken} from 'react-icons/md'
import Motion01 from '../../assets/motion03.png'
import Motion02 from '../../assets/motion01.png'

const Services = () => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    dots: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
   
  
  };

  const boxesData = [
    {
      icon: (<AiOutlineSafetyCertificate size={75} color='grey'/>),
      title: 'Safe and Secure',
      description: 'Phasellus venenatis porta rhoncus. Integer et viverra felis.',
    },
    {
      icon: (<MdOutlineAttachMoney size={75} color='grey'/>),
      title: 'Decentralize Payment',
      description: 'Phasellus venenatis porta rhoncus. Integer et viverra felis.',
    },
    {
      icon: (<RiMoneyEuroCircleLine size={75} color='grey'/>),
      title: 'NO DILUTION',
      description: 'Phasellus venenatis porta rhoncus. Integer et viverra felis.',
    },
    {
 
      icon: (<MdOutlineToken size={75} color='grey'/>),
      title: 'Excerpt Tokens',
      description: 'Phasellus venenatis porta rhoncus. Integer et viverra felis.',
    },
   
  ];

  return (
    <>
      <div className='Services'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
            <Zoom>
              <div className='box info'>
                <TitleBasic title='Services'/>
                <h2 className=''>We <span className='text-dark'>Cover A Big Variety Of </span>cyrbto Services</h2>
                <p className=''>We provide the special tips and advice’s of money follow and high level of best.</p>

              </div>
              </Zoom>
            </div>
            
            

            <Fade Right>
            <div className='col-lg-8 col-sm-12'>
            
              <div className="slider-container">
                  <Slider {...settings}>
                    {boxesData.map((box, index) => (
                      <ItemOne
                        key={index}
                        icon={box.icon} 
                        title={box.title}
                        description={box.description}
                      />
                      ))}
                  </Slider>
              </div>
            </div>
            </Fade>
            <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
