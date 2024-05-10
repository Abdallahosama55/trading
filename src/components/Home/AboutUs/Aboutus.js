import './Aboutus.css';
import TitleBasic from '../../TitleBasic/TitleBasic';

import Motion01 from '../../../assets/bg02.png';
import { useEffect, useState, useRef } from 'react'; // Import the useRef hook

import Motion02 from '../../../assets/bg06.png';
import { Fade } from 'react-reveal';
import { useSelector } from 'react-redux';





const Aboutus = () => {
  const isEnglish = useSelector((state) => state.language.isEnglish);


  return (
    <>
    <div className='about' dir={isEnglish?'ltr':'rtl'}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <Fade left>
              <div className='box boxtext'>
                <TitleBasic title={isEnglish ? "About Us" : "معلومات عنا"} />
                <h2 className=' text-white'>{isEnglish ? "History of your business and why you started it" : "تاريخ عملك والسبب في بدء عملك"}</h2>
                <p>
                  {isEnglish ? "Welcome to our wealth management company, where we specialize in forex and crypto trading to help our clients achieve their financial goals. Our team of experienced professionals is dedicated to providing tailored and sophisticated investment solutions to clients all over the world." : "مرحبًا بك في شركة إدارة الثروات الخاصة بنا، حيث نختص في تداول الفوركس والعملات الرقمية لمساعدة عملائنا على تحقيق أهدافهم المالية. فريقنا من المحترفين ذوي الخبرة ملتزم بتقديم حلول استثمارية مصممة ومتطورة للعملاء في جميع أنحاء العالم."}
                </p>
                <div className='icons'>
          
                </div>
                <button href="#/" className=' btn btn-dark bg-dark'>{isEnglish ? "Read More" : "اقرأ المزيد"}</button>
              </div>
            </Fade>
          </div>
          <Fade right>
            <div className='col-lg-6'>
              <img src={require('../../../assets/about.png')} className=' w-100'/>
            </div>
          </Fade>
          <div className='img-bg'>
            <img src={Motion01} alt='img' className='img01'/>
            <img src={Motion02} alt='img' className='img02'/>
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
};

export default Aboutus;
