import React from 'react'

import '../../css/components/_footer.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'

import logo from '../../images/logo/logo.svg'

function Footer() {
  return (
    <div>
            <footer class="footer" id="footer">
        <div class="footer_main">
            <div class="logo">
                <img src={logo} alt="Webook logo"/>
                <p>Get industry accredited certification and advance through our high-quality online courses.</p>
            </div>
            <div class="company">
                <h1>
                    Company
                </h1>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Sustainablity</a>
                    </li>
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <div class="resources">
                <h1>
                    Resources
                </h1>
                <ul>
                    <li>
                        <a href="#">Payment</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Feedback</a>
                    </li>
                </ul>
            </div>
            <div class="quick">
                <h1>
                    Quick
                </h1>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <h1>2022 <span>©</span> Copyright <span>Webook</span> And Design By <a href="https://github.com/SM8UTI">SM8UTI 😃</a>
            </h1>
        </div>
    </footer>
    </div>
  )
}

export default Footer