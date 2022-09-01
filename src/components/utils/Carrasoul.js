import React, { useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
export const Carrasoul = () => {

  
  const images = [
    {
      image:'https://source.unsplash.com/random/500x200'
    },
    {
      image:'https://source.unsplash.com/random/600x200'
    },
    {
      image:'https://source.unsplash.com/random/400x200'
    },
  ]
  
  const [current, setCurrent] = useState(0)
  const length = images.length 


  const nextSlide = ()=> {
    setCurrent( current === length - 1 ? 0 : current + 1)
    console.log(current)
  }
  const prevSlide = ()=> {
    setCurrent( current === 0 ? length - 1  : current - 1)
    console.log(current)
  }

  return (
      <div className='carrasoul'>
        <FaArrowAltCircleLeft onClick={prevSlide}></FaArrowAltCircleLeft>
        {images.map((image, idx) => {
          return (
            <div className={idx === current ? 'slide active' : ''} key={idx}> 
              { idx ===current && (
                <img src={image.image} alt="" />

              )}
            </div>
          )
        })}
        <FaArrowAltCircleRight onClick={nextSlide}></FaArrowAltCircleRight>
      </div>
  )
}
