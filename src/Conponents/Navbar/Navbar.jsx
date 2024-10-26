import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className="nav-left">
            <h1 className='logo-name'>BROWN ENVELOPE</h1>

        <div className="nav-right">
            <li> About Brown Envelope</li>
            <li>Rules of Use</li>
            <li>Connect with us</li>
        </div>

    </div>
  )
}

export default Navbar