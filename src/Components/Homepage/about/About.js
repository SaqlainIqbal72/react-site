import React from 'react';
import blur2 from './Ellipse 7.png'
import './about.css'

function About() {
  return (<>
 <section className='about'>
  <h1>About Us</h1>
  <div className='about-flex'>
    <div className='about-left'>
      <div className='about-left-1'></div>
      <div className='about-left-2'></div>
    </div>
    <div className='about-right'>
      <h3>Description</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button><a>Learn more</a></button>
    </div>
<img className='blur2' src={blur2}></img>
  </div>
  
 </section>
  
  </>
  )
}

export default About