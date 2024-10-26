import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>

        <h1 className='logo-name'>BROWN ENVELOPE</h1> 

        <div className="nav-menu">
            <li> About Brown Envelope</li>
            <li>Rules of Use</li>
            <li className='connect'>Connect with us</li>
        </div>

    </div>
  )
}

export default Navbar