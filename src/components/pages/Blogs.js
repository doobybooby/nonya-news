import React from 'react'
import GithubIcon from '../../images/github-icon.svg'
import NonyaNews from '../../images/nonyaNewsLogo.png'
export const Blogs = () => {
  return (
    <div className='blogs-component'>
      <hr className='blog-stats'></hr>
      
      <div className='blogs-wrapper'>
        <div className='blogs-post'>
          <div className='blogs-post-header'>
            <div>
              <img src={GithubIcon} alt="Github"  />
            </div>
            <h2>Nonya New's Second Post w/ Pic</h2>
          </div>
          <img src={NonyaNews} lt="" />
          <div className='blog-discription'>
            <p>This is the description about the post I wanted to write about Nonya News and its parent Nonya Toonz Record LLC. If you feel passionate about a cause or just like to share your opinion about what is going on in the world, this is the best place for that</p>
          </div>
          <div className='blog-stats'>
            <p>19820 likes</p>
            <p>76 comments</p>
            <img src="" alt="share" />
          </div>
        </div>
      </div>
      
      <div className='blogs-wrapper'>
        <div className='blogs-post'>
          <div className='blogs-post-header'>
            <div>
              <img src={GithubIcon} alt="Github"  />
            </div>
            <h2>Nonya New's Second Post w/ Pic</h2>
          </div>
          <div className='blog-discription'>
            <p>This is the description about the post I wanted to write about Nonya News and its parent Nonya Toonz Record LLC. If you feel passionate about a cause or just like to share your opinion about what is going on in the world, this is the best place for that</p>
          </div>
          <div className='blog-stats'>
            <p>19820 likes</p>
            <p>76 comments</p>
            <img src="" alt="share" />
          </div>
        </div>
      </div>

    </div>
  )
}
