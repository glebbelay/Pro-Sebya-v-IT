import React from 'react'

import '../../css/components/_contact.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'

function ContactSection() {
  return (
    <div>
                <section class="contact" id="contact">
            <div class="contact_text">
                <h1>Contact</h1>
            </div>
            <div class="contact_main">
                <div class="input">
                    <form action="contact">
                        <div class="name">
                            <label for="username">Name</label>
                            <input type="text" placeholder="John Marine" id="username"/>
                        </div>
                        <div class="email">
                            <label for="useremail">Email</label>
                            <input type="email" placeholder="John@gmail.com" id="useremail"/>
                        </div>
                        <div class="textarea">
                            <label for="usertext">Message</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="submit">
                            <button class="button-86">Send</button>
                        </div>
                    </form>
                </div>
                <div class="details">
                    <div class="details_text">
                        <h1>Get In Touch</h1>
                        <p>20 students daily learn with e-learning. Subscribe for new updates.</p>
                    </div>
                    <ul>
                        <li>
                            <p>+0123 4567 8944</p>
                            <ion-icon name="call"></ion-icon>
                        </li>
                        <li>
                            <p>help@webook.com</p>
                            <ion-icon name="mail"></ion-icon>
                        </li>
                        <li>
                            <p>102 Street london</p>
                            <ion-icon name="location"></ion-icon>
                        </li>
                    </ul>
                    <div class="social">
                        <div class="box">
                            <a href="#">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </div>
                        <div class="box">
                            <a href="#">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </div>
                        <div class="box">
                            <a href="#">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </div>
                        <div class="box">
                            <a href="#">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default ContactSection