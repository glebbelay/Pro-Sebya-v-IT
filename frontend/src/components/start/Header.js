import React from 'react'

import '../../css/components/_header.scss'
import '../../css/components/_classes.scss'


import logo from '../../images/logo/logo.svg'

function Header() {
  return (
    
    <header class="header" id="header">
    <div class="logo">
        <img src={logo} alt="logo"/>
    </div>
    <div class="menu-hamburger" id="toggle">

    </div>
    <nav class="navbar" id="navbar">
        <ul class="navbar-list" id="primary-navbar" data-visiable="false">
            <li><a href="#banner" class="navbar-links">Home</a></li>
            <li><a href="#features" class="navbar-links">Features</a></li>
            <li><a href="#about" class="navbar-links">About</a></li>
            <li><a href="#contact" class="navbar-links">Contact</a></li>
            <li><a href="#courses" class="btn btn-get-courses"><span>Get Courses</span></a></li>
        </ul>
    </nav>
    </header>

  )
}

export default Header