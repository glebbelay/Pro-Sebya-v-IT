import React from 'react'

import '../../css/components/_banner.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'

import causal from '../../images/causal.png'

function BannerSection() {
  return (
    <div>
        <section class="banner column-4" id="banner">
            <div class="text-area">
                <div class="text-part">
                    <h1>Grow Your <span>Skills</span> to Advance Your Career Path</h1>
                    <p>Get industry accredited certification and advance through our high-quality online courses.</p>
                </div>
                <div class="button-group">
                    <a href="#courses" class="btn btn-start-course">Start A Course</a>
                </div>
            </div>
            <div class="image-area">
                <img src={causal} alt="v"/>
                
                <div class="circle"></div>
                <a href="#features" class="info info-expert">
                    <ion-icon name="people-circle-outline"></ion-icon><span>Profesional
                        Expert</span>
                </a>
                <a href="#features" class="info info-live">
                    <ion-icon name="videocam-outline"></ion-icon><span>Live Class</span>
                </a>
                <a href="#features" class="info info-chat">
                    <ion-icon name="chatbox-ellipses-outline"></ion-icon><span>Doubt Clearing Class</span>
                </a>
            </div>

        </section>
    </div>
  )
}

export default BannerSection