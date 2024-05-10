import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Logo from '../../assets/AHA Logo Full Black PNG (1).png'
import LinkedIN from '../../assets/linkein.png'
import Instagram from '../../assets/instagram.png'
import WhatsUp from '../../assets/whatsapp-svgrepo-com.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Footer = () => {
  const isEnglish = useSelector((state) => state.language.isEnglish);

  return (
    <>
    <div className='footer text-center text-md-start bottom-0 '   dir={isEnglish ? 'ltr' : 'rtl'}>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3 col-md-6'>
          <div className='box01'>
            <Link to="/"><img src={Logo} alt='Logo' className='img-fluid white-image rounded-5 w-100 '/></Link>
            <p>{isEnglish ? "AHA MARKET is a partner with the best broker, Vantage" : "AHA Market  هو شريك مع أفضل وسيط مالي Vantage"}</p>
            <div className='icon-text'>
              <div className="icon-container"><FontAwesomeIcon icon={faPhone} className='iconphone'/></div>
              <div className='textContact'>
                <h2>{isEnglish ? "Contact Us" : "اتصل بنا"}</h2>
                <span>+971509272772</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className='box ml-50'>
            <h3>{isEnglish ? "Quick Links" : "روابط سريعة"}</h3>
            <ul>
              <Link to='/aboutus'><li>{isEnglish ? "Forex" : "الفوركس"}</li></Link>
              <Link to='/services'><li>{isEnglish ? "Crypto" : "العملات الرقمية"}</li></Link>
              <Link to='/#'><li>{isEnglish ? "Forex Cross Rates" : "معدلات صرف العملات الأجنبية"}</li></Link>
            </ul>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className='box'>
            <h3>{isEnglish ? "Our Service" : "خدماتنا"}</h3>
            <ul>
              <Link to='/#'><li>{isEnglish ? "Trading" : "تداول"}</li></Link>
              <Link to='/#'><li>{isEnglish ? "Crypto" : "العملات الرقمية"}</li></Link>
              <Link to='/#'><li>{isEnglish ? "Exchange" : "الصرافة"}</li></Link>
            </ul>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className='box'>
            <h3 >{isEnglish ? "Subscribe" : "اشترك"}</h3>
            <div className='social-media'>
              <ul>
                <li><a href='https://www.instagram.com/ahamarket.official/'><img src={Instagram} alt='Instagram'/></a></li>
                <li><a href='https://www.linkedin.com/company/aha-market/'><img src={LinkedIN} alt='LinkedIN'/></a></li>
                <li><a href='https://wa.me/+971509272772'><img src={WhatsUp} className='p-2 rounded-4 text-success' width={50} alt='WhatsUp'/></a></li>
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
