import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink to='/' > HOME </NavLink>
      <NavLink to='/blogs' > BLOGS </NavLink>
      <NavLink to='/oped' > OP-ED </NavLink>
    </nav>
  )
}

export default Nav