import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import BreakingNews from '../images/icons/breakingNewsGif.gif'
import axios from 'axios'



export const VideoPlayer = () => {

  const [gif, setGif] = useState()
  const fetchGif = async()=> {
    const response = await axios.get('https://api.giphy.com/v1/gifs/2yxkSUWYzgnsPje3X8?api_key=VJzTzmeIBgh1OwTFtAi6dx9RHFyRunB2')
    setGif(response.data.data.embed_url)
  } 
  fetchGif()

  return (
    <div >
      <img className='react-video-player' src={BreakingNews} alt="" width='100%' height='70%' />
      {/* <ReactPlayer
        className='react-video-player' 
        url='https://api.giphy.com/v1/gifs/2yxkSUWYzgnsPje3X8?api_key=VJzTzmeIBgh1OwTFtAi6dx9RHFyRunB2'
        width='100%'
        height='70%'
        playing={true}
        loop={true}
        muted={true}
      >
      </ReactPlayer> */}
    </div>
  )
}
