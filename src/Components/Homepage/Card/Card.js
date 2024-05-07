import React from 'react';
import '../Card/card.css'
import CardComponent from './CardComponent';

function Card() {
  return (
    <>
    <section className='section'>
        <div className=' flex'>
<CardComponent CardHeading='UX/UI Designing' CardPara='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
<CardComponent CardHeading='Video Eiditing' CardPara='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
<CardComponent CardHeading='Wordpress Dev' CardPara='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        </div>
    <button><a>View All Services</a></button>
    </section>
    </>
  )
}

export default Card