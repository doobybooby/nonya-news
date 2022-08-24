import React from 'react'
import { NavLink } from 'react-router-dom'
import NonyaNewsLogo from '../images/nonyaNewsLogo.png'

function Nav() {
  return (
    <div className='flex-col nav'>
      <nav className='flex-row'>
        <img src={ NonyaNewsLogo } width='25%' alt='logo'/>
        <NavLink className='nav-item' to='/' > HOME </NavLink>
        <NavLink className='nav-item' to='/blogs' > BLOGS </NavLink>
        <NavLink className='nav-item' to='/about' > ABOUT  </NavLink>
      </nav>
    </div>
  )
}

export default Nav