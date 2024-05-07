import React from 'react'
import './main.css'
import blur1 from './blur1.png'

function Main() {
  return (
    <>
    <div className='home'>
        <div className='line'></div>
        <h1>Jumik<span>Studios </span>Creative Agency</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img className='blur-1' src={blur1}></img>

    </div>
    </>
  )
}

export default Main