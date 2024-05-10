import React from 'react'
import './Signals.css'
import { FaStar } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import PricePlan from '../PricePlan/PricePlan';
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Bounce, Fade, Zoom } from 'react-reveal';
import { useSelector } from 'react-redux';

const items = [
  {
    image: require('../../assets/12.png'),
    text: 'More than 4K Member',
    icon: FaPerson
  },
  {
    image: require('../../assets/130.png'),
    text: 'Technical analysis',
    icon: IoAnalyticsSharp
  },
  {
    image: require('../../assets/141.png'),
    text: 'Up to 3 free signals weekly',
    icon: FaGift
  },
  {
    image: require('../../assets/151.png'),
    text: 'Educational content',
    icon: MdCastForEducation
  }
];
function Signals() {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const items = [
    {
      image: require('../../assets/12.png'),
      text: isEnglish ? 'More than 4K Member' : 'أكثر من 4 آلاف عضو',
      icon: FaPerson
    },
    {
      image: require('../../assets/130.png'),
      text: isEnglish ? 'Technical analysis' : 'التحليل الفني',
      icon: IoAnalyticsSharp
    },
    {
      image: require('../../assets/141.png'),
      text: isEnglish ? 'Up to 3 free signals weekly' : 'حتى 3 إشارات مجانية أسبوعيًا',
      icon: FaGift
    },
    {
      image: require('../../assets/151.png'),
      text: isEnglish ? 'Educational content' : 'محتوى تعليمي',
      icon: MdCastForEducation
    }
  ];
  
  return (
    <div className=' bg-light bg-black ' dir={isEnglish?'ltr':'rtl'}>
    <div className=' bg-light w-100 d-flex justify-content-center '>
      <div className=' row  py-5 ps-5 pe-5  justify-content-center  w-100'>
        <div className=' col-md-6 container p-3'>
          <Fade left> 
            <h1 className=' text-muted fw-bold '>{isEnglish ? 'Introducing Top-Tier Crypto Signals by AHA Market' : 'تقديم إشارات العملات الرقمية من الدرجة الأولى من AHA Market'}</h1>
          </Fade>
          <Fade left>
            <p>{isEnglish ? "In our quest to offer unparalleled insights and guidance in the realm of cryptocurrency trading, we've established a vibrant community on Telegram. Our mission is simple: to share our expertise through accurate signals, empowering others to make informed decisions and navigate the crypto market with confidence." : "في سعينا لتقديم رؤى وإرشادات لا مثيل لها في مجال تداول العملات الرقمية، قمنا بإنشاء مجتمع نشط على تيليجرام. مهمتنا بسيطة: مشاركة خبرتنا من خلال إشارات دقيقة، لتمكين الآخرين من اتخاذ قرارات مستنيرة والتنقل في سوق العملات الرقمية بثقة."}</p>
          </Fade>
          <Link className=' text-decoration-none' to="https://t.me/+UrF-HuCnv685ZGZk">
            <Fade left>
              <button className="button-63 rounded-5 fw-semibold" role="button">{isEnglish ? 'Join Telegram' : 'انضم إلى تيليجرام'}</button>
            </Fade>
          </Link>
        </div>
        <div className=' col-md-6    d-flex  justify-content-center align-items-center'>
          <div className='w-75  d-flex  justify-content-center align-items-center head-img bg-dark rounded-4'>
            <Zoom>
              <img src={require('../../assets/design.png')} className='mb-5 w-75'/>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  
    <section className='p-3 bg-light'>
      <div className=' m-md-5 justify-content-center align-items-center'>
        <div className=' rounded-4 shadow bg-dark'>
          <h2 className='pb-0 text-light text-center d-flex align-items-center py-4 justify-content-center'>
            <FaStar style={{ color: "hsl(38, 99%, 49%)" }} />{isEnglish ? 'Free Aha Market Channel' : 'قناة Aha Market المجانية'}
          </h2>
          <div className='justify-content-center py-5 pb-5 w-100 row'>
            {items.map((item, index) => (
              <div key={index} className='col-md-3'>
                <Bounce>
                  <div className='row justify-content-center align-items-center'>
                    <div className='col-12 d-flex justify-content-center'>
                      <img src={item.image} className='rounded img-illustration' />
                    </div>
                    <div className='col-12 text-center'>
                      <span className='text-light text-center'>
                        <item.icon size={22} className='ms-2' />{item.text}
                      </span>
                    </div>
                  </div>
                </Bounce>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  
    <section className=' bg-light '>
      <Zoom>
        <PricePlan/>
      </Zoom>
    </section>
  </div>
  
    
  )
}

export default Signals