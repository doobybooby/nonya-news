import React from 'react'
import LogoContainer from '../utils/LogoContainer'

function About() {
  return (
    <div className='About'>
      <img src="" alt="carousel" />
      <h1>ABOUT US</h1>
      <div className='aboutInfo-container'>
        <h2>MISSION</h2>
        <p>
          Nonya News is a Product of Nonya Toonz Record LLC.
          We wanted make an app where users can retrieve reliable news data with a simple digest and its source.
          <br />
          A user can leave a like and comment on the article, and share it with whomever they please.
          In the future we are planning on integrating this onto the Avalanche platform
        </p>
      </div>
      <div className='aboutInfo-container'>
        <h2>Nonya Toonz Records </h2>
        <p>
          Nonya Toonz Records LLC is making an attempt to normalize the usage of WEB3 applications and help integrate multi-media platform into the world of WEB3. 
        </p>
      </div>
      <h2>AVALANCHE</h2>
      <div className='aboutInfo-container'>
        <h2> What is Avalanche (AVAX) </h2>
        <p>Avalanche is an open, programmable smart contracts platform for decentralized applications. <a href="https://decrypt.co/resources/what-is-avalanche-network-avax-ava-labs">Read More</a></p>
      </div>
      <div className='aboutInfo-container'>
        <h2> Why Avlanche </h2>
        <p>TL:DR; Blazing Fast, Low Cost & Eco-Friendly</p>
        <p>Solutions: Defi, dApp, NFT</p>
        <p>Sources:</p>
        <ul>
          <li>
            <a href="https://www.avax.network/solutions">AVALANCHE</a>
          </li>
          <li>
            <a href="https://cryptoseq.medium.com/a-quick-overview-of-avalanche-avax-and-why-you-should-be-paying-attention-612278598da2">MEDIUM</a>
          </li>
          <li>
            <a href="https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/avalanche-crypto/">MOTLEY FOOL'S</a>
          </li>
          <li>
            <a href="https://www.cnbc.com/2021/11/23/what-to-know-about-ethereum-competitor-avalanche-as-avax-rallies.html">CNBC</a>
          </li>
        </ul>
      </div>
      <h2>TEAM</h2>

      <div id='team' className="aboutInfo-container">
        <h2>Hanbin Lee</h2>
        <div className='profile-card'>
          <img src="https://source.unsplash.com/random/300x200" alt="profile_pic" width='50%'/>
          <div>
            <ul>
              <li>
                <h4>CEO</h4>
              </li>
              <li>
                <h4>Photographer</h4>
              </li>
              <li>
                <h4>Writer</h4>
              </li>
              <div className='flex-row'>
                <li>
                  <a href="">GITHUB</a>
                </li>
                <li>
                  <a href="">LINKED IN</a>
                </li>
              </div>
            </ul>
          </div>
          <div>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere non recusandae qui perspiciatis? Reprehenderit blanditiis doloremque quos dolorum aperiam alias nisi perspiciatis aliquam excepturi, rem voluptates sed enim dolores quidem.</p>
      </div>

      <div id='team' className="aboutInfo-container">
        <h2>Doobin Lee</h2>
        <div className='profile-card'>
        <img src="https://source.unsplash.com/random/300x200" alt="profile_pic" width='50%'/>
          <div>
            <ul>
              <li>
                <h4>CTO</h4>
              </li>
              <li>
                <h4>Software Engineer</h4>
              </li>
              <li>
                <h4>Photographer</h4>
              </li>
              <div className='flex-row'>
                <li>
                  <a href="">GITHUB</a>
                </li>
                <li>
                  <a href="">LINKED IN</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere non recusandae qui perspiciatis? Reprehenderit blanditiis doloremque quos dolorum aperiam alias nisi perspiciatis aliquam excepturi, rem voluptates sed enim dolores quidem.</p>
      </div>

      <h2>CONTACTS</h2>
      <div id='form' className="aboutInfo-container">
        <form action="">
          <label htmlFor=""> Name </label>
            <input type="text" />
          <label htmlFor=""> Email </label>
            <input type="text" />
          <label htmlFor=""> Message </label>
            <textarea rows="" cols=""></textarea>
          <button>Submit</button>
        </form>
      </div>

      <h2>News Sources</h2>
      <LogoContainer/>
    </div>
  )
}

export default About