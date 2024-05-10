import React, { Fragment ,useEffect } from 'react';

import { motion } from 'framer-motion';

import LazyLoad from 'react-lazyload';
import {SlChart} from 'react-icons/sl'
import { useNavigate } from 'react-router-dom';
import './Forex.css';

import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import img5 from '../../assets/5.png'
import { Bounce, Fade, Zoom } from 'react-reveal';
import { useSelector } from 'react-redux';
const Forex = () => {

  const isEnglish = useSelector((state) => state.language.isEnglish);
  const navigate = useNavigate();
  const featuresEnglish = [
    {
      image: require('../../assets/ac.png'),
      title: 'Easy Trading',
    },
    {
      image: require('../../assets/aa.png'),
      title: 'Fast Earn',
    },
    {
      image: require('../../assets/ab.png'),
      title: 'More Trusted',
    },
  ];
  
  const featuresArabic = [
    {
      image: require('../../assets/ac.png'),
      title: 'تداول سهل',
    },
    {
      image: require('../../assets/aa.png'),
      title: 'كسب سريع',
    },
    {
      image: require('../../assets/ab.png'),
      title: 'أكثر موثوقية',
    },
  ];
  
  const features = isEnglish ? featuresEnglish : featuresArabic;
  

  const imageVariants2 = {
    initial: {
      y: '0%',
    },
    animate: {
      y: [-30, 30, -30, 0],
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };
  const imageVariants = {
    initial: {
      x: '0%',
    },
    animate: {
      x: '20%',
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

    useEffect(() => {
        // Your other code here
      }, []);
    
      const handleTickerError = (error) => {
        console.error(error);
      };
    
  return (
    <Fragment>
    <div className='sec1-forex d-flex justify-content-center align-items-center ' dir={isEnglish?"ltr":"rtl"}>
    <div className=' d-block'>
      <div className='row justify-content-center align-items-center '>
        <div className='col-md-2 mt-2 col-sm-4 '>
          <LazyLoad 
            src={require('../../assets/account.png')}
            alt="Account"
            className="w-100 ms-4 d-md-none"
          />
          <div style={{ overflow: 'hidden', width: '100%' }}>
            <motion.img
              src={require('../../assets/forexmoney.png')}
              alt="Moving Image"
              className="moving-image d-none d-md-block"
              initial="initial"
              animate="animate"
              variants={imageVariants2}
            />
          </div>
        </div>
        <div className='col-md-8' dir={isEnglish?"ltr":"rtl"}>
          <Zoom>
          <h1 className='fw-bold text-warning header-text'>{isEnglish ? 'Account Management' : 'إدارة الحساب'}</h1>
          </Zoom>
          <Fade>
            <p className='w-100   fw-bold '>
              {isEnglish ?
                "To assist our clients in achieving their financial objectives, we provide thorough account management services on our wealth management website. Our team of knowledgeable financial advisors is committed to offering you specialized investment options that match your specific requirements and risk tolerance."
                :
                "لمساعدة عملائنا في تحقيق أهدافهم المالية، نقدم خدمات إدارة الحسابات الشاملة على موقعنا الإلكتروني لإدارة الثروات. فريقنا من المستشارين الماليين المتخصصين ملتزم بتقديم خيارات استثمارية متخصصة تتناسب مع متطلباتك الخاصة وقدرتك على تحمل المخاطر."
              }
            </p>
          </Fade>
          <div className='d-flex justify-content-center align-items-center'>
            <button className='btn btn-warning' onClick={() => window.location.href = 'https://wa.me/+971509272772'}>{isEnglish ? 'Contact us' : 'اتصل بنا'}</button>
          </div>
        </div>
        <div className='col-md-2 mt-2 col-sm-12 ' dir={isEnglish?"ltr":"rtl"}>
          <div style={{ overflow: 'hidden', width: '100%' }}>
            <img
              src={require('../../assets/forexmoney.png')}
              alt="Moving Image"
              className="moving-image d-none d-md-block"
       
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className='sec2-forex p-5'>
  <div className='container'>
    <div className='row' dir={isEnglish ?'ltr':'rtl'}>
      <div className='col-md-6  col-sm-12' >
        <Fade top>
          <h1 className='fw-bold text-warning'>{isEnglish ? '$ 100 Challenge' : 'تحدي 100 دولار'}</h1>
        </Fade>
        <Fade left>
          <p className='text-muted py-5 mt-2  '>
            {isEnglish ?
              'Welcome to our $100 challenge, where we offer high-risk investment opportunities with the potential for a $1000 outcome within a month. This challenge is designed for clients who are willing to take on higher risk in exchange for the potential for higher return.'
              :
              'مرحبًا بكم في تحدي 100 دولار لدينا، حيث نقدم فرص استثمار عالية المخاطر مع إمكانية الحصول على نتيجة بقيمة 1000 دولار خلال شهر واحد. تم تصميم هذا التحدي للعملاء الذين يرغبون في تحمل مخاطر أعلى مقابل إمكانية العائد الأعلى.'
            }
          </p>
        </Fade>
      </div>
      <div className='col-md-6    d-flex  justify-content-center  col-sm-12'>

        <motion.img
        src={img5}
        alt="Moving Image"
        className="moving-image bg-dark  rounded-5"
  
      />
      
      </div>
    </div>
  </div>
</div>

     
      <div className='sec3-forex  p-5 m-3 '>
      <h1 className='p-5 text-center text-muted fw-semibold '>
      {isEnglish ? 'About ' : 'حول '}
      <span className='text-warning '>{isEnglish ? 'Trading' : 'تداول'}</span> 
      {isEnglish ? ' forex' : ' الفوركس'}
    </h1>
    
      <div className='container sec3-forex-container   shadow rounded-3 '>
        <div className='row d-flex justify-content-center align-items-center'>
        {features.map((feature, index) => (
     <Zoom>
          <div key={index} className=' col-md-4 col-sm-12 p-3'>
          <div className='p-2'>
          <LazyLoad>
          <img src={feature.image} width={125} alt={feature.title} />
        </LazyLoad>
          </div>
         <h3 className='text-muted fw-medium p-2 '>{feature.title}</h3>
    
          
          </div>
          </Zoom>
          ))}
     
        </div>
        
      </div>
      
    </div>

    </Fragment>
    
  );
  const ErrorBoundary = ({ onError, children }) => {
    try {
      return children;
    } catch (error) {
      onError(error);
      return null;
    }
  };
};

export default Forex;