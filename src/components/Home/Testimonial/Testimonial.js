import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Bounce, Fade, Zoom } from 'react-reveal';
import './Testimonial.css'
import TitleBasic from '../../../components/TitleBasic/TitleBasic'
import ItemTestimonial from './ItemTestimonial';


import bgTestimonial from '../../../assets/test.png'
import { useSelector } from 'react-redux';







const Testimonial = () => {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const boxesDataEnglish = [
    {
      description: 'your wealth management wallets focus on transparency and accountability, providing clients with tools for informed decisions, and supporting all traders in achieving their financial goals..',
      doctor: 'John Deo',
      patient: 'mohammed',
    },
    {
      description: 'AHA Market has revolutionized my crypto journey! The platform sleek design and user-friendly interface make trading a breeze. I appreciate the wide range of supported cryptocurrencies and the real-time market data. AHA Market is where innovation meets simplicity',
      doctor: 'John Hed',
      patient: 'Ali',
    },
    {
      description: 'As a beginner in the crypto space, AHA Market made the learning curve enjoyable. The platform educational resources and demo account helped me gain confidence. The supportive community and intuitive design make AHA Market the perfect starting point for anyone new to investing.',
      doctor: 'Gala Ted',
      patient: 'Noor',
    },
  ];
  
  const boxesDataArabic = [
    {
      description: 'تركز محافظ إدارة الثروات الخاصة بك على الشفافية والمساءلة، وتوفير العملاء بالأدوات اللازمة لاتخاذ القرارات المستنيرة، ودعم جميع المتداولين في تحقيق أهدافهم المالية.',
      doctor: 'جون ديو',
      patient: 'محمد',
    },
    {
      description: 'قامت AHA Market بثورة في رحلتي في عالم العملات الرقمية! تصميم المنصة الأنيق وواجهة المستخدم السهلة تجعل التداول أمرًا سهلاً. أقدر تشكيلة واسعة من العملات الرقمية المدعومة وبيانات السوق في الوقت الحقيقي. AHA Market هو المكان الذي يجتمع فيه الابتكار بالبساطة',
      doctor: 'جون هيد',
      patient: 'علي',
    },
    {
      description: 'باعتباري مبتدئًا في مجال العملات الرقمية، جعلتني AHA Market منحنى التعلم ممتعًا. موارد المنصة التعليمية وحساب التجربة ساعدتني على اكتساب الثقة. المجتمع الداعم والتصميم البديهي يجعلان AHA Market النقطة البدائية المثالية لأي شخص جديد في مجال الاستثمار.',
      doctor: 'جالا تيد',
      patient: 'نور',
    },
  ];
  
  const boxesData = isEnglish ? boxesDataEnglish : boxesDataArabic;

  return (
    <>
    <div className='testimonial'>
    <div className='container'>
      <div className='titlemain'>
        <TitleBasic title={isEnglish ? 'Testimonial' : 'الشهادات'}/>
        <Fade top>
          <h2 className=' text-dark'>{isEnglish ? 'See What Are The Customers Saying About us' : 'انظر ماذا يقول العملاء عنا'}</h2>
        </Fade>
      </div>
      <div className='row'>
        <div className='col-lg-6'>
          <Zoom>
            <div className='box thumb-wraper'>
              <img src={bgTestimonial} alt='img' className='img-fluid'/>
            </div>
          </Zoom>
        </div>
        <div className='col-lg-6'>
          <Bounce right>
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
          </Bounce>
        </div>
      </div>
    </div>
  </div>
  
    </>
  )
}

export default Testimonial
