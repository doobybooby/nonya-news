import React from 'react'

export const Carrasoul = () => {
  return (
      <div className='carrasoul'>
        <button>
          left
        </button>
        <ul>
          <li className='carousel_slide'>
            <img src="https://source.unsplash.com/random/300x200" alt="profile_pic" width='50%'/>
          </li>
          <li className='carousel_slide'>
            <img src="https://source.unsplash.com/random/300x200" alt="profile_pic" width='50%'/>
          </li>
          <li className='carousel_slide'>
            <img src="https://source.unsplash.com/random/300x200" alt="profile_pic" width='50%'/>
          </li>
        </ul>
        <button>
          right
        </button>
      </div>
  )
}
