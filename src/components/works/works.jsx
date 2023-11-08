import React from 'react'
import './works.css'
import WorksItem from './WorksItem'

import TitleBasic from '../../components/TitleBasic/TitleBasic'
import { Zoom } from 'react-reveal'
import Motion01 from '../../assets/bg03.png'
import Motion02 from '../../assets/motion02.png'


function Works() {
  const boxesData = [
    {
      number: '100$',
      title: 'Standered offer',
      description: 'It is a long established fact that a reader will be distracted by the readable content of.      ',
    },
    {
      number: '500$',
      title: 'premium offer',
      description: 'It is a long established fact that a reader will be distracted by the readable content of.      ',
    },
    {
      number: '1000$',
      title: 'Vip offer',
      description: 'It is a long established fact that a reader will be distracted by the readable content of.      ',
    },
  ];

  return (
    <div>
    
    <div className='works'>
        <div className='container'>
          <div className='main-title'>
            <TitleBasic title='Offers'/>
            <h2>Do you want Get offer Now?</h2>
          </div>
          <Zoom>
          <div className='row'>
            {boxesData.map((box, index) => (
            <WorksItem
              key={index}
              number={box.number} 
              title={box.title}
              description={box.description}
            />
          ))}
          </div>
          </Zoom>
          <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Works


  