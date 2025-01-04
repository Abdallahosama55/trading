import React, { useEffect } from 'react';
import Services from '../Services/Services';
import './Cyrpto.css';
import ReactGA from 'react-ga';
import CountUp from 'react-countup';
import { Bounce, Fade, Zoom } from 'react-reveal';
import LazyLoad from 'react-lazyload';
import { useSelector } from 'react-redux';

function Cyrpto() {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const features = [
    {
      image: require('../../assets/img1cyrpto.png'),
      title: isEnglish ? '24/7 Customer Support' : 'دعم العملاء على مدار الساعة طوال أيام الأسبوع',
    },
    {
      image: require('../../assets/trust.png'),
      title: isEnglish ? 'Daily Market News' : 'أخبار السوق اليومية',
    },
    {
      image: require('../../assets/man.png'),
      title: isEnglish ? 'Offering Fast Withdrawals' : 'تقديم سحوبات سريعة',
    },
    {
      image: require('../../assets/Atm.png'),
      title: isEnglish ? 'Support ATM cash withdrawal' : 'دعم سحب النقد من الصراف الآلي',
    },
    {
      image: require('../../assets/eflk.webp'),
      title: isEnglish ? 'Your Personal Atm Capital Expert' : 'خبير رأس المال الشخصي لديك',
    },
    {
      image: require('../../assets/chat-boxbt.webp'),
      title: isEnglish ? 'Negative Balance Protection' : 'حماية الرصيد السلبي',
    },
  ];
  
  const text = {
    english: {
      title: 'Make Your Life Easier With Crypto',
      description: 'Trade bitcoin and other crypto with confidence on the world\'s fastest and most secure crypto exchange',
      buttonText: 'Apply to wallet',
      feauture1:"Active Users",
      feauture2:"Personal ATM",
feature3:"Wallet Types",
      title2: 'WHY US',
      subTitle2: 'Empowering You with So Much',
      description2: 'Stay On The Forefront With Easy-To-Use Tools To Help Cultivate Your Ideal Trading Strategy.',
    },
    arabic: {
      title: 'اجعل حياتك أسهل مع العملات المشفرة',
      description: 'تداول بيتكوين وغيرها من العملات المشفرة بثقة على أسرع وأكثر تبادل مشفر آمن في العالم',
      buttonText: 'قدم طلبًا للمحفظة',
      feauture1:"المستخدمين المشتركين",
feauture2:"بطاقات بنكية شخصية",
feauture3:"من انواع البطاقات ",

      title2: 'لماذا نحن',
      subTitle2: 'نمكّنك بكل قوتنا',
      description2: 'ابق على الجبهة الأمامية باستخدام أدوات سهلة الاستخدام للمساعدة في تنمية استراتيجية التداول المثالية لديك.',
    },
    
  };

  useEffect(() => {
    ReactGA.initialize('G-PL2LJ1Z4FC');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const handleApplyToWallet = () => {

    // Track the button click event
    ReactGA.event({
      category: 'Button',
      action: 'Apply to Wallet Button Clicked',
    });

    // Add your logic for applying to wallet here
    console.log('Applying to wallet...');
  };

  return (
    <div className="bg-light font-popines" dir={isEnglish?"ltr":'rtl'}>
      <div className='bg-warning'>
        <div className='container py-5 bg-warning pb-0'>
          <div className='row py-5'>
       
          <div className='col-md-6'>
            <Bounce top>
              <h2 className='text-dark text-center text-header'>{isEnglish ? text.english.title : text.arabic.title}</h2>
            </Bounce>
            <p className='text-center text-muted'>{isEnglish ? text.english.description : text.arabic.description}</p>
            <div className='container pb-0 pt-3'>
              <div className='row rounded py-3 justify-content-center align-items-center d-flex'>
                <div className='col text-center'>
                  <h1 className='fw-bolder'>
                    +<CountUp delay={1} end={50} />
                  </h1>
                  <h2 className='text-dark'>{isEnglish ? text.english.feauture1 : text.arabic.feauture1}</h2>
                </div>
                <div className='col text-center'>
                  <div className='d-block'>
                    <h1 className='fw-bolder'>
                      +<CountUp delay={1} end={40} />
                    </h1>
                    <h2 className='text-dark'>{isEnglish ?  text.english.feature3   : text.arabic.feauture3}</h2>
                  </div>
                </div>
                <div className='col text-center'>
                  <div className='d-block'>
                    <h1 className='fw-bolder'>
                      +<CountUp delay={1} end={35} />
                    </h1>
                    <h2 className='text-dark'>{isEnglish ? text.english.feauture2 : text.arabic.feauture2 }</h2>
                  </div>
                </div>
                <a href='https://url.hk/i/en/6bbpv' className='btn btn-success p-2 shadow'>
                  <button className='bg-success border-0 text-light tajawal-medium fs-6' onClick={()=>handleApplyToWallet()}>
                    {isEnglish ? text.english.buttonText : text.arabic.buttonText}
                  </button>
                </a>
              </div>
            </div>
          </div>
            <div className='col-md-4 m-md-5 m-0 p-0'>
              <Fade right>
                <div className='container justify-content-center justify-content-center'>
                <LazyLoad>
                 
                <img src={require('../../assets/89.png')} className='w-100 justify-content-center' />
                </LazyLoad>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFC107" fillOpacity="1" d="M0,32L1440,192L1440,0L0,0Z"></path></svg>

      <div className='container bg-light p-5'>
        <Fade top>
          <h2 className='text-center'>{isEnglish ? text.english.title2 :text.arabic.title2}</h2>
        </Fade>
        <Fade top>
          <h1 className='header-section2'> *{isEnglish ? text.english.subTitle2 :text.arabic.subTitle2}*</h1>
        </Fade>
        <p className='text-muted p-2 text-center'>{isEnglish ? text.english.description2 :text.arabic.description2}</p>

        <div className='row justify-content-center align-content-center'>
          {features.map((feature, index) => (
            <Zoom key={index}>
              <div className='col-md-3 me-3 mt-5 py-3 col-sm-12 shadow rounded'>
                <div className='d-flex justify-content-center align-items-center'>
                  <div>
                    <div className='d-flex justify-content-center align-items-center'>
                      <LazyLoad>
                       
                        <img src={feature.image} width={130} alt='Feature' />
                      </LazyLoad>
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