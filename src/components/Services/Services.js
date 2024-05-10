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
import { useSelector } from 'react-redux';

const Services = () => {
  const isEnglish = useSelector((state) => state.language.isEnglish);

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

  const boxesDataEnglish = [
    {
      icon: (<AiOutlineSafetyCertificate size={75} color='grey'/>),
      title: 'Safe and Secure',
      description: 'Cryptocurrencies prioritize safety and security by employing advanced cryptographic techniques, decentralized networks, and immutable transaction records.',
    },
    {
      icon: (<MdOutlineAttachMoney size={75} color='grey'/>),
      title: 'Decentralize Payment',
      description: 'Cryptocurrencies allow for peer-to-peer transactions without the need for intermediaries. Transactions are verified and recorded '
    },
    {
      icon: (<RiMoneyEuroCircleLine size={75} color='grey'/>),
      title: 'NO DILUTION',
      description: 'Cryptocurrencies often strive for decentralization, where the decision-making power is distributed among network participants.',
    },
    {
      icon: (<MdOutlineToken size={75} color='grey'/>),
      title: 'Excerpt Tokens',
      description: 'Digital assets or functionalities are represented by tokens on a blockchain. These tokens can represent various assets, such as utility tokens,',
    },
  ];
  
  const boxesDataArabic = [
    {
      icon: (<AiOutlineSafetyCertificate size={75} color='grey'/>),
      title: 'آمن وآمن',
      description: 'تولي العملات الرقمية أولوية للسلامة والأمان من خلال توظيف تقنيات التشفير المتقدمة والشبكات اللامركزية وسجلات المعاملات غير القابلة للتغيير.',
    },
    {
      icon: (<MdOutlineAttachMoney size={75} color='grey'/>),
      title: 'الدفع اللامركزي',
      description: 'تسمح العملات الرقمية بالمعاملات بين الأقران دون الحاجة إلى وسطاء. تتم التحقق من المعاملات وتسجيلها '
    },
    {
      icon: (<RiMoneyEuroCircleLine size={75} color='grey'/>),
      title: 'لا تخفيف',
      description: 'تسعى العملات الرقمية في كثير من الأحيان إلى اللامركزية، حيث يتم توزيع سلطة اتخاذ القرار بين مشاركي الشبكة.',
    },
    {
      icon: (<MdOutlineToken size={75} color='grey'/>),
      title: 'الرموز المختصرة',
      description: 'يتمثل الأصول الرقمية أو الوظائف في رموز على سلسلة كتلية. يمكن أن تمثل هذه الرموز مجموعة متنوعة من الأصول، مثل الرموز المرجعية،',
    },
  ];
  
  const boxesData = isEnglish ? boxesDataEnglish : boxesDataArabic;
  
  return (
    <>
      <div className='Services' dir={isEnglish ? 'ltr' : 'rtl'}>
      <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <Zoom>
          <div className='box info'>
          <TitleBasic title={isEnglish ? 'Services' : 'الخدمات'}/>
          <h2 className=''>{isEnglish ? 'We' : 'نحن'} <span className={isEnglish ? 'text-dark' : 'text-white'}>{isEnglish ? 'Cover A Big Variety Of' : 'نغطي مجموعة كبيرة من'}</span> {isEnglish ? 'cyrbto Services' : 'خدمات العملات الرقمية'}</h2>
          <p className={isEnglish ? 'text-dark' : 'text-white'}>{isEnglish ? 'We provide the special tips and advice’s of money follow and high level of best.' : 'نحن نقدم النصائح والتوجيهات الخاصة بمتابعة الأموال وأعلى مستوى من الأفضل.'}</p>
        </div>
          </Zoom>
        </div>
    
        <Fade right>
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
      </div>
    </div>
    
      </div>
    </>
  )
}

export default Services
