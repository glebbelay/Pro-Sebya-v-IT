import React from 'react'

import '../../css/components/_about.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'
import '../../css/global/_fonts.scss'

function AboutSection() {
  return (
    <div>
        <section class="about" id="about">
            <div class="about_content">
                <div class="text">
                    <h2>More About Us</h2>
                        <p>Webook is an online course website that prioitizes practice over theory, with thousands of
                            certified mentors and tens of
                            thousands of students we can produce thosand of graduates who are immediately ready for a
                            professional career.
                        </p>
                        <h1>About</h1>
                </div>
                <div class="image">

                    <img src="https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        alt="" />
                </div>
            </div>
            <div class="about_stats">
                <div class="card card-1">
                    <h1>8000</h1>
                    <p>Students</p>
                </div>
                <div class="card card-1">
                    <h1>30</h1>
                    <p>Experts</p>
                </div>
                <div class="card card-1">
                    <h1>15</h1>
                    <p>Courses</p>
                </div>
                <div class="card card-1">
                    <h1>5</h1>
                    <p>Countries</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutSection