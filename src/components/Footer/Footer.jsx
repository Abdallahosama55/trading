import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Logo from '../../assets/1602-01.webp'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.png'
import Linkein from '../../assets/linkein.png'
import Motion01 from '../../assets/motion01.png'
import Motion02 from '../../assets/motion02.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='footer text-center text-md-start   bottom-0   '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='box01'>
                <Link to="/"><img src={Logo} alt='Logo' className='img-fluid bg-white rounded-2  p-3'/></Link>
                <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                <div className='icon-text'>
                  <div className="icon-container"><FontAwesomeIcon icon={faPhone} className='iconphone'/></div>
                  <div className='textContact'>
                    <h2>Contact Us</h2>
                    <span>+971 50 927 2772</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='box ml-50'>
                <h3>Quick Links</h3>
                <ul>
                  <Link to='/aboutus'><li>Forex</li></Link>
                  <Link to='/services'><li>Crypto</li></Link>
    
              
                  <Link to='/#'><li>Forex Cross Rates</li></Link>
       
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='box'>
                <h3>Our Service</h3>
                <ul>
                
                <Link to='/#'><li>Cardiology</li></Link>
                <Link to='/#'><li>Precise Diagnosis</li></Link>
                <Link to='/#'><li>Abmbulance Services</li></Link>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='box'>
                <h3>Subcribe</h3>
              
                <div className='social-media'>
                  <ul>
                    <li><a href='#/'><img src={Facebook} alt='Facebook'/></a></li>
                    <li><a href='#/'><img src={Twitter} alt='Twitter'/></a></li>
                    <li><a href='#/'><img src={Instagram} alt='Instagram'/></a></li>
                    <li><a href='#/'><img src={Linkein} alt='Linkein'/></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='Copyright text-white'>
            <p>Copyright © 2023 Design & Developed by Abdallah Osama</p>
          </div>
    
        </div>
      </div>
    </>
  )
}

export default Footer
