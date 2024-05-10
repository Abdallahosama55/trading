import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Services.css'
import ItemOne from '../../../Components/ItemOne/ItemOne';

import TitleBasic from '../../../Components/TitleBasic/TitleBasic';

import Motion01 from '../../../assets/Images/motion03.png'
import Motion02 from '../../../assets/Images/motion01.png'
import { useSelector } from 'react-redux';

const Services = () => {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const settings = {
    infinite: true,
  
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
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
              slidesToShow: 1.1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1
            }
          }
        ]
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
      <div className='Services'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12'>
              <div className='box info'>
                <TitleBasic title='Products'/>
                <h2>We Cover A Big Variety Of Medical Products</h2>
                <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
                <button className='btn'>All Product</button>
              </div>
            </div>
            <div className='col-lg-12'>
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
            <a>Show More Product</a>
            <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
