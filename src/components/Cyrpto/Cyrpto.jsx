import React from 'react';
import Services from '../Services/Services';
import './Cyrpto.css';
import CountUp from 'react-countup';

import videoo from '../../assets/cyrpto.mp4';
import { Bounce, Fade, Zoom } from 'react-reveal';

function Cyrpto() {
  const features = [
    {
      image: require('../../assets/img1cyrpto.png'),
      title: '24/7 Customer Support',
    },
  
    {
      image: require('../../assets/trust.png'),
      title: 'Daily Market News',
    },
    {
      image: require('../../assets/man.png'),
      title: 'Offering Fast Withdrawals',
    },
    {
      image: require('../../assets/Atm.png'),
      title: 'Support ATM cash withdrawal',
    },
    {
      image: require('../../assets/eflk.webp'),
      title: 'Your Personal Atm Capital Expert',
    },
    {
      image: require('../../assets/chat-boxbt.webp'),
      title: 'Negative Balance Protection',
    },
  ];

  return (
    <div className="bg-light">
      <div className=' py-5 bg-warning '>
        <div className='row py-5'>
          <div className='col-md-12'>
          <Bounce top>
            <h2 className='text-dark text-center  text-header'>Make Your Life Easier With Cyrpto </h2>
            </Bounce>
            <p className='text-center text-muted'>Trade bitcoin and other crypto with confidence on the world's fastest and most secure crypto exchange</p>
            <div className='container pb-0 pt-3'>
              <div className='row  rounded py-3'>
                <div className='col text-center '>
                  <h1 className='fw-bolder'>
                    +<CountUp delay={1} end={50} />
                  </h1>
                  <h2 className=' text-dark'>Active Users</h2>
                </div>
                <div className='col text-center'>
                  <div className='d-block '>
                    <h1 className='fw-bolder'>
                      +<CountUp delay={1} end={40} />
                    </h1>
                    <h2 className='text-dark'>
                      Wallet Types
                    </h2>
                  </div>
                </div>
                <div className='col text-center'>
                  <div className='d-block '>
                    <h1 className='fw-bolder'>
                      +<CountUp delay={1} end={35} />
                    </h1>
                    <h2 className=' text-dark'>Personals Atm</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFC107" fill-opacity="1" d="M0,32L1440,192L1440,0L0,0Z"></path></svg>

      <div className='container bg-light p-5'>
      <Fade top>
        <h2 className='text-center'>WHY US</h2>
        </Fade>
        <Fade top>
        <h1 className='header-section2'> * Empowering You with So Much *</h1>
        </Fade>
        <p className='text-muted p-2 text-center'>Stay On The Forefront With Easy-To-Use Tools To Help Cultivate Your Ideal Trading Strategy.</p>

        <div className='row  justify-content-center align-content-center'>
          {features.map((feature, index) => (
            <Zoom>
            <div key={index} className='col-md-3 me-3 mt-5 py-3 col-sm-12 shadow rounded'>
              <div className='d-flex justify-content-center align-items-center'>
                <div>
                  <div className='d-flex justify-content-center align-items-center'>
                    <img src={feature.image} width={130} alt='Feature' />
                  </div>
                  <h6 className='text-center p-3'>{feature.title}</h6>
                </div>
              </div>
            </div>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cyrpto;