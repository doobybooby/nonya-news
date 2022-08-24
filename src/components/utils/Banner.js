import React from 'react'
import { InfoBanner } from './InfoBanner'

export const Banner = () => {
  return (
    <div className='banner'>
      <h1>5-Min Scroll</h1>
      <h2>Stay up to date</h2>
      <InfoBanner/>
      <div>
        <p>| Current News |</p>
      </div>
    </div>
  )
}
