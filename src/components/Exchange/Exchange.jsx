import React, { Fragment } from 'react'
import img_sec2 from '../../assets/4.png'
import { Container, Figure } from 'react-bootstrap'
import { motion } from 'framer-motion';

import Wave from 'react-wavify'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload';
import ReactTyped  from  'react-typed'
import Services from '../../components/Services/Services'

import Works from '../../components/works/works'
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { useSelector } from 'react-redux';

function Exchange() {
  const isEnglish = useSelector((state) => state.language.isEnglish);
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

  return (
    <Fragment>
    <div  className='mt-5 py-4'>

    
    </div>

    <div className='m-0 p-0 ' >
    <div className='  w-100  sec-1  '>
 <Container className='h-75  mb-5'>
 <div className='row   mt-5 py-md-5'>
 <div className='col-md-5 col-sm-12 d-flex justify-content-center align-items-center '>

  
 <div style={{ overflow: 'hidden', width: '100%' }}>
<LazyLoad>
 <motion.img
   src={require('../../assets/10 (2).png')}
   alt="Moving Image"
  
   style={{"width":"100%"}}
   initial="initial"
   animate="animate"
   variants={imageVariants}
 />
 </LazyLoad> 
</div>




</div>

  <div className='col-md-7 '>


  <div className='container py-5 header-text pe-md-3 py-md-5 justify-content-center align-items-center w-100 mt-md-5'>
  <Bounce>
  <div>
  <h1 className='text-warning'>{isEnglish ? 'Start Cash Your Crypto' : 'ابدأ صرف عملتك الرقمية'}</h1>
 <p className='w-75 py-3 fs-5 text-dark'>  
 {isEnglish ? 'Our exchange service simplifies crypto transactions, offering a secure gateway between banks and digital assets, while providing seamless purchasing experiences for users.' : 'يوفر خدمة التبادل لدينا عمليات التداول في العملات المشفرة، مما يوفر بوابة أمان بين البنوك والأصول الرقمية، مع توفير تجارب شراء سلسة للمستخدمين.'}
 </p>
 
</div>
</Bounce>
  </div>

  </div>
 <Zoom>

 </Zoom>
 </div>
 
 
 
 </Container>
<div>
    <Wave fill='#191919'
    paused={false}
    style={{ display: 'flex' }}
    options={{
      height:10,
      amplitude: 20,
      speed: 0.45,
      points: 5
    }}
    
  />
  </div>


  <div className='pb-5 bg-dark sec-2 ' dir={isEnglish?'ltr':'rtl'}>
  <Container >
  
  <div className='row  justify-content-center align-items-center  d-flex w-100'>
  <div className='col-md-6 col-xl-6  col-sm-12'>
<LazyLoad>
  <img src={img_sec2} className='w-100 '></img>
  </LazyLoad>
  </div>

  <div className='col-md-6 col-xl-6 col-sm-12  '>
  <Fade>
  <div> 
  <h5 className='    mb-4 mt-4  fw-normal  sec2-text text-light'>
   <span className='text-warning span-word fw-bold '>{isEnglish?"Converting USDT (Tether)":"حول عملتك الرقميه USDT"}</span>

   {isEnglish?   <ReactTyped strings={[" to fiat currency using a Visa card provides a straightforward and efficient way for cryptocurrency users to access traditional money. Simply visit a supported exchange platform, complete necessary verifications, deposit USDT into your account, and initiate the exchange process. With the convenience of Visa, users can seamlessly transition their digital assets into real-world currency, enabling them to use their funds for various transactions and expenditures. This process offers flexibility and accessibility, bridging the gap between the cryptocurrency and traditional financial ecosystems."]} typeSpeed={75}  loopCount={60} loop  /> :
   
   
  <div className=' py-4 mt-3'> <Bounce>  طريقة مباشرة وفعالة لمستخدمي العملات المشفرة للوصول إلى الأموال التقليدية.       USDT في حسابك، وبدء عملية التبادل. ومن خلال الراحة التي توفرها Visa، يمكن للمستخدمين تحويل أصولهم الرقمية بسلاسة إلى عملة حقيقية، مما يمكنهم من استخدام أموالهم في مختلف المعاملات والنفقات. توفر هذه العملية المرونة وإمكانية الوصول، مما يسد الفجوة بين العملة المشفرة والأنظمة المالية التقليدية.</Bounce> </div>}
  
  </h5>
  
</div>
</Fade>

</div>

  
  </div>
  </Container>
    </div>
  <div>
 
  <Works/>

  </div>
  </div>
   </div>
    </Fragment>
  )
}

export default Exchange