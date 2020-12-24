import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        {/* <a className="nav-link active" aria-current="page" href="#">Use Context</a> */}
        <Link className='nav-link active' to='/'>
          Use Context
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link active' to='/'>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link ' to='/about'>
          About
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link ' to='/login'>
          Login
        </Link>
      </li>
    </ul>
  )
}

export default NavBar
