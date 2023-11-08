import './Aboutus.css';
import TitleBasic from '../../TitleBasic/TitleBasic';
import ImgAbout01 from '../../../assets/bgg03.png';
import ImgAbout02 from '../../../assets/bgg5.png';
import ImgAbout03 from '../../../assets/bgg6.png';
import ImgAbout04 from '../../../assets/bgg4.png';
import Motion01 from '../../../assets/bg02.png';
import { useEffect, useState, useRef } from 'react'; // Import the useRef hook

import Motion02 from '../../../assets/bg06.png';






const Aboutus = () => {
 


  return (
    <>
    <div className='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='box boxtext'>
                <TitleBasic title="About Us" />
                <h2>History of your business and why you started it</h2>
                <p>Welcome to our wealth management company, where we specialize in forex and crypto trading to help our clients achieve their financial goals. Our team of experienced professionals is dedicated to providing tailored and sophisticated investment solutions to clients all over the world.</p>
                <div className='icons'>
        
                </div>
                <button href="#/" className='btn'>Read More</button>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='box-img'>
                <ul className='ul-img'>
                  <li><img src={ImgAbout01} alt='img' className='imgabout01 img-fluid'/></li>
                  <li><img src={ImgAbout02} alt='img' className='imgabout02 img-fluid'/></li>
                  <li><img src={ImgAbout03} alt='img' className='imgabout03 img-fluid rounded'/></li>
                  <li><img src={ImgAbout04} alt='img' className='imgabout04 img-fluid rounded'/></li>
                </ul>
              </div>
            </div>
            <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
