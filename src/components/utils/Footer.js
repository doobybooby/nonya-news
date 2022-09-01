import React from 'react'
import TikTokIcon from '../../images/tiktok-icon.svg'
import GithubIcon from '../../images/github-icon.svg'
import IgIcon from '../../images/ig-instagram-icon.svg'
import GmailIcon from '../../images/Gmail_icon.svg'
import DiscordIcon from '../../images/discordIcon.svg'

export const Footer = () => {
  return (
    <div className='component-footer'>
      <div className='footer-logos-container'>
        <img src={GithubIcon} alt="Github" width='17%' />
        <img src={IgIcon} alt="Email" width='17%' />
        <img src={TikTokIcon} alt="TikTok" width='17%'/>
        <img src={DiscordIcon} alt="Email" width='17%' />
        <img src={GmailIcon} alt="Email" width='17%' />
      </div>
      <p className='copyright'> Copyright © 2022 Nonya Toonz Record LLC </p>
    </div>
  )
}
