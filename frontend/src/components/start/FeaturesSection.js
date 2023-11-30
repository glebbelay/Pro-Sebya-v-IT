import React from 'react'

import '../../css/components/_features.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'

function FeaturesSection() {
  return (
    <section class="features" id="features">
    <div class="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"></path>
        </svg>
    </div>
    <div class="main-container column-2">
        <div class="text-part">
            <h1>High Quality Video, Audio, Live Class and Courses.</h1>
            <p>High Defination video is video of higher resolution and quality than match of industry level. Get
                industry accredited
                certification and advance through our high-quality online courses.</p>
            <div class="feature-card column-2">
                <div class="card card1">
                    <ion-icon name="person-sharp"></ion-icon>
                    <h3>Learn From Experts</h3>
                    <p>We Collaborate with industry leaders who take care in delivering high-quallity education
                    </p>
                </div>
                <div class="card card2">
                    <ion-icon name="timer-sharp"></ion-icon>
                    <h3>Lifetime Support</h3>
                    <p>We guaranteee lifetime help. which you can leverage at any moment and from any place.
                    </p>
                </div>
                <div class="card card3">
                    <ion-icon name="bookmark-sharp"></ion-icon>
                    <h3>Professional Certification</h3>
                    <p>When you complete the class or course, you will get a certificate that is recognized in
                        the world.
                    </p>
                </div>
            </div>
        </div>
        <div class="image-part">
            <div class="overlay-text">
                <h1>
                    Why<br />Choose<br />US
                </h1>
            </div>
            <div class="overlay-color"></div>
        </div>
    </div>
    </section>
  )
}

export default FeaturesSection