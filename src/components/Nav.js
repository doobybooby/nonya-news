import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='flex-col nav'>
      <h1>NONYA NEWS</h1>
      <h2>Where you read other people's business</h2>
      <nav className='flex-row'>
        <NavLink className='nav-item' to='/' > HOME </NavLink>
        <NavLink className='nav-item' to='/blogs' > FINANCE </NavLink>
        <NavLink className='nav-item' to='/oped' > BLOGS </NavLink>
      </nav>
    </div>
  )
}

export default Nav