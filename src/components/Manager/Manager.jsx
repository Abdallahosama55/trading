import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Testimonial.css'
import TitleBasic from '../../components/TitleBasic/TitleBasic'
import ItemTestimonial from './ItemTestimonial';


import bgTestimonial from '../../assets/manger.jpeg'
import { Fade } from 'react-reveal';
import { useSelector } from 'react-redux';





const Manager = () => {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const boxesData = [
    {
      description: isEnglish
        ? 'Our core philosophy is centered around the belief that everyone deserves access to sound financial advice and investment opportunities, regardless of their background or experience. We strive to create a welcoming and inclusive environment that empowers our clients to make informed investment decisions and take control of their financial future.'
        : 'تتمحور فلسفتنا الأساسية حول الاعتقاد بأن الجميع يستحق الوصول إلى النصائح المالية السليمة وفرص الاستثمار، بغض النظر عن خلفيتهم أو تجربتهم. نحن نسعى لإيجاد بيئة ترحيبية وشاملة تمكن عملائنا من اتخاذ قرارات استثمارية مستنيرة والسيطرة على مستقبلهم المالي.',
      doctor: '',
      patient: '',
    },
  ];
  
  return (
    <>
    <div className='testimonial container  bg-white '>
      <div className=''>
        <Fade top>
          <div className='titlemain'>
            <TitleBasic title={isEnglish ? 'Founder & CEO' : 'المؤسس والرئيس التنفيذي'} />
            <h2 className='text-dark'>{isEnglish ? 'Care values and beliefs for your business' : 'قيم العناية والمعتقدات لشركتنا'}</h2>
          </div>
        </Fade>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='container'>
              <Slider {...settings}>
                {boxesData.map((box, index) => (
                  <ItemTestimonial
                    key={index}
                    description={box.description}
                    doctor={box.doctor}
                    patient={box.patient}
                  />
                ))}
              </Slider>
            </div>
          </div>
          <Fade right>
            <div className='col-lg-4'>
              <div className='box thumb-wraper justify-content-center d-flex w-100 '>
                <img src={bgTestimonial} alt='img' className='img-fluid bg-remove ' />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Manager
