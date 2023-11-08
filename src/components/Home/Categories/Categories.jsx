import Slider from "react-slick";
import React from 'react'
import './Categories.css'

import { Link } from "react-router-dom";


import { AiOutlineArrowRight } from "react-icons/ai";
import Forex from "../../Forex/Forex";


function Categories() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
       
        autoplaySpeed: 1000,
        dots: true,
       
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div>
    
    <div>
    
    <h2>Categories</h2>
    
    <Slider {...settings}>

    <div >
    <Link to="Forex">
    
    <img src={require('../../../assets/bgg1.png')}className="w-100"  />
    <h4 className="text-center"> Forex</h4>
    </Link>
   

  </div>
  <div >
  <Link to="Cyrpto">
    <img src={require('../../../assets/bgg2.png')}className="w-100"  />
    <h4 className="text-center">Cyrpto</h4>
    </Link>
  </div>

  <div >
  <Link to="About_us">
    <img src={require('../../../assets/bgg5.png')}className="w-100"  />
    <h4 className="text-center">About us</h4>
    </Link>
  </div>
  <div >
  <Link to="Exchange">
    <img src={require('../../../assets/bg8.png')}className="w-100"  />
    <h4 className="text-center">Exchange</h4>
    </Link>
  </div>

    
    </Slider>
   
  </div>

    
    
    </div>
  )
}

export default Categories