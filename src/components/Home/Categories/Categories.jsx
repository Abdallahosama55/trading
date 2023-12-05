import React, { Fragment } from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Forex from '../../Forex/Forex';
import { Fade, Zoom } from 'react-reveal';
import Slider from 'react-slick';

function Categories() {
  const categories = [
    {
      id: 1,
      imageSrc: require('../../../assets/TT.png'),
      title: 'Forex',
      link: 'Forex'
    },
    {
      id: 2,
      imageSrc: require('../../../assets/TT2.png'),
      title: 'Crypto',
      link: 'Crypto'
    },
    {
      id: 3,
      imageSrc: require('../../../assets/TT3.png'),
      title: 'About Us',
      link: 'About_us'
    },
    {
      id: 4,
      imageSrc: require('../../../assets/TT4.png'),
      title: 'Exchange',
      link: 'Exchange'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Fragment>
      <Zoom>
        <div className="Categoreis">
          <div>
            <Fade top>
              <h2 className="text-white gy-2 p-3 text-center">Categories</h2>
            </Fade>
            <div className="d-flex justify-content-center">
              <div className="p-1 ps-4 pe-4 bg-black shadow bg-white" />
            </div>

            <Slider {...settings}>
            {categories.map((category) => (
              <div key={category.id} className="category-item">
                <Link to={category.link}>
                  <img src={category.imageSrc} className="w-100 rounded bg-dark" />
                  <h4 className="text-center  fw-semibold">{category.title}</h4>
                </Link>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </Zoom>
    </Fragment>
  );
}

export default Categories;