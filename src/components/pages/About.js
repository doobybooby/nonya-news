import React from 'react'

function About() {
  return (
    <div className='About'>
      <h1>ABOUT US</h1>
      <img src="" alt="carousel" />
      <h2>MISSION</h2>
      <p>
        Nonya News is a Product of Nonya Toonz Record LLC.
        We wanted make an app where users can retrieve reliable news data with a simple digest and its source.
        A user can leave a like and comment on the article, and share it with whomever they please.
        In the future we are planning on integrating this onto the Avalanche platform
      </p>

      <h2>Nonya Toonz Records LLC</h2>
      <p>

      </p>

      <h2>AVALANCHE</h2>
      <div>
        <h3> What is Avalanche </h3>
        <p>Avalanche is an open, programmable smart contracts platform for decentralized applications.</p>
        
        <h3> When did Avlanche Launch?</h3>
        <p>
          Avalanche, coin symbol AVAX, launched its mainnet in September 2020. <a href="https://decrypt.co/resources/what-is-avalanche-network-avax-ava-labs">Decrypto.co</a>
        </p>

        <h3> Why Avlanche </h3>
        <h5>TL:DR; Blazing Fast, Low Cost & Eco-Friendly</h5>
        <h5>Solutions: Defi, dApp, NFT</h5>
        <ul>
          <h4>Sources</h4>
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
        <h3> Where to Avalanche </h3>
        <p>
          Once you have some AVAX in your wallet you can start inter
        </p>
        <h3> How to Avlanche </h3>
        <p>
          In order to participate and interact in the Decentralized world you would first need to obtain some AVAX.
          this could be done, <a href="https://wallet.avax.network/">here</a> or by using any of the reliable decentralized exchanges.
        </p>
      </div>

      <h2>TEAM</h2>

        <div className='profile-card'>
          <img src="https://source.unsplash.com/random/300x200" alt="profile_pic" />
          <div>
            <h3>Hanbin Lee</h3>
            <h4>CEO, JOURNALIST, PHOTOGRAPHER</h4>
            <ul>
              <li>
                <a href="">GITHUB</a>
              </li>
              <li>
                <a href="">LINKED IN</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className='profile-card'>
          <img src="https://source.unsplash.com/random/300x200" alt="profile_pic" />
          <div>
            <h3>Doobin Lee</h3>
            <h4>CTO, Journalist, Software Engineer</h4>
            <ul>
              <li>
                <a href="">GITHUB</a>
              </li>
              <li>
                <a href="">LINKED IN</a>
              </li>
            </ul>
          </div>
        </div>

        <h2>ROADMAP</h2>
        <div>
          <p>LETS ADD THIS IF WE HAVE ENOUGH TIME</p>
        </div>

        <h2>CONTACTS</h2>
        <div>
          <form action="">
            <label htmlFor=""> Name </label>
              <input type="text" />
            <label htmlFor=""> Email </label>
              <input type="text" />
            <label htmlFor=""> Message </label>
              <textarea rows="" cols=""></textarea>
          </form>
        </div>

    </div>
  )
}

export default About