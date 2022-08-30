import React, { useRef } from 'react'
import { InfoBanner } from './InfoBanner'

export const Banner = () => {
    const ref = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className='banner'>
      <InfoBanner/>
      <div className='banner-hero-text'>
        <h1>5-Min Scroll</h1>
        <button 
          className='banner-hero-button'
          onClick={handleClick}
        >| Read Reliable News |</button>
        {/* <p>| Read Reliable News |</p> */}
      </div>
    </div>
  )
}
