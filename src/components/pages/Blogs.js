import React from 'react'
import GithubIcon from '../../images/github-icon.svg'
import NonyaNews from '../../images/nonyaNewsLogo.png'
import { AiOutlineShareAlt, AiOutlineComment, AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

export const Blogs = () => {
  return (
    <div className='blogs-component'>
      
      <div className='blogs-wrapper'>
        <div className='blogs-post'>

          <div className='blogs-post-header'>
            <img src={GithubIcon} alt="Github"  />
            <h3>Nonya New's Second Post w/ Pic</h3>
          </div>
          
          <img src={NonyaNews} lt="" />
          
          <div className='blog-discription'>
            <p>This is the description about the post I wanted to write about Nonya News and its parent Nonya Toonz Record LLC. If you feel passionate about a cause or just like to share your opinion about what is going on in the world, this is the best place for that</p>
          </div>
          <div className='blog-stats'>
            <div className='blog-likes'>
              <AiFillCaretDown size={50}/>
              <p>19820</p>
              <AiFillCaretUp size={50}/>
            </div>
            <div className='blog-comments'>
              <AiOutlineComment size={50}/>
            </div>
            <AiOutlineShareAlt size={50}/>
          </div>
          <p>5 hours ago</p>
        </div>
      </div>
      
      <div className='blogs-wrapper'>
        <div className='blogs-post'>

          <div className='blogs-post-header'>
            <img src={GithubIcon} alt="Github"  />
            <h3>Nonya New's Second Post w/ Pic</h3>
          </div>
          
          <div className='blog-discription'>
            <p>This is the description about the post I wanted to write about Nonya News and its parent Nonya Toonz Record LLC. If you feel passionate about a cause or just like to share your opinion about what is going on in the world, this is the best place for that</p>
          </div>
          <div className='blog-stats'>
            <div className='blog-likes'>
              <AiFillCaretDown size={50}/>
              <p>4562</p>
              <AiFillCaretUp size={50}/>
            </div>
            <div className='blog-comments'>
              <AiOutlineComment size={50}/>
            </div>
            <AiOutlineShareAlt size={50}/>
          </div>
        </div>
      </div>
      

    </div>
  )
}
