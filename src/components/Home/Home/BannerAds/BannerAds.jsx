import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from "react-router-dom";
import { useEffect } from "react";
import'./BannerAds.css'
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchData, fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../../Redux/ReduxADS/apiSlice';
import { PropagateLoader } from "react-spinners";
import { BsTag } from "react-icons/bs";
import img_icon from '../../../assets/Images/ads.svg';


import Slider from 'react-slick';
function BannerAds() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        prevArrow: null, // Hide the previous arrow
        nextArrow: null, // Hide the next arrow
      };
      
      const data = useSelector((state) => state.apiAds.data);
      console.log(data)
      const loading = useSelector((state) => state.apiAds.loading);
      const error = useSelector((state) => state.apiAds.error);
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(fetchDataStart());
        dispatch(fetchData())
          .then(unwrapResult)
          .then((data) => {
            dispatch(fetchDataSuccess(data));
          })
          .catch((error) => {
            dispatch(fetchDataFailure(error.message));
          });
      }, [dispatch]);
  return (
    <div>
    {loading ? (
        <div className=" d-flex justify-content-center align-items-center">
        <PropagateLoader color="#36d7b7"></PropagateLoader>
        
        
        </div>
       ) : error ? (
         `Error: ${error}`
       ) : data.length === 0 ? (
         'No data found'
       ) : (
    <Slider {...settings}>
    {data.data?.map((item, index) => (
    <div className='background-container' key={index}>
  
    <img src={item.image} alt='Background Image' className='background-image' />
    <div className=''>
    <div className='row justify-content-center'>
    <div className='col-7 banner-text  '> 
    <h1>{item.title}</h1>
    <p>{item.description}</p>
    </div>
    <div className='col-3'>  

    <div class="container mt-5">



    <div class="d-flex justify-content-center">
        <div class="">
            <div class="content badge bg-danger  rounded-circle p-4">
            <BsTag  size={25}/> 
            <br/>
          <span className=' fw-semibold fs-1'>  {item.discount} </span>
            </div>
        </div>
    </div>

</div>



  
  
  </div>
   
    </div>
     
    </div>
  </div>

  ))}
  
     
  
 



     
   
    </Slider>
       )}
    
    </div>
  )
}

export default BannerAds