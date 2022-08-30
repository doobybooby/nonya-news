import React from 'react'
import { InfoBanner } from './InfoBanner'

export const Banner = () => {
  return (
    <div className='banner'>
      <InfoBanner/>
      <div className='banner-hero-text'>
        <h1>5-Min Scroll</h1>
        <button className='banner-hero-button'>| Read Reliable News |</button>
        {/* <p>| Read Reliable News |</p> */}
      </div>
    </div>
  )
}
