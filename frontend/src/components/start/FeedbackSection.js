import React from 'react'
import { useState } from 'react'

import '../../css/components/_faq.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'


function FeedbackSection() {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);

    const toggleAccordion1 = () => {
      setIsActive1(!isActive1);
    };
    const toggleAccordion2 = () => {
        setIsActive2(!isActive2);
      };
    const toggleAccordion3 = () => {
        setIsActive3(!isActive3);
      };
    const toggleAccordion4 = () => {
        setIsActive4(!isActive4);
      };
    const toggleAccordion5 = () => {
        setIsActive5(!isActive5);
      };
    const toggleAccordion6 = () => {
        setIsActive6(!isActive6);
      };
  return (

    <div>
        
            <section class="faq" id="faq">
            <div class="faq_text">
                <h1>FAQ</h1>
                <hr class="line"/>
            </div>
            <div class="faq_main">
                <div class="accordian">
                    <div class={`accordian_item ${isActive1 ? 'active' : ''}`}>
                        <a href="#q1" class="link" onClick={toggleAccordion1}>
                            <p>Who should take an Online Course?</p>
                            <ion-icon class="down" name="caret-down-outline"></ion-icon>
                            <ion-icon class="up" name="caret-up-outline"></ion-icon>
                        </a>
                        <div class="answer">
                            <p>
                                Students join our online courses for a variety of reasons and come from diverse
                                backgrounds, professions, and age
                                groups. With online courses, you can
                                Advance your skill-set or begin a career change.
                                Take the next step in your formal education.
                                Ease the transition before entering a full-time academic program.
                                Enjoy learning a new topic.
                                Whatever the reason, our online courses are a flexible way of learning about the art
                                world without disrupting your daily
                                life.
                            </p>
                        </div>
                    </div>
                    <div class={`accordian_item ${isActive2 ? 'active' : ''}`}>
                        <a href="#q2" class="link" onClick={toggleAccordion2}>
                            <p>Are there prerequisites or language requirements?</p>
                            <ion-icon class="down" name="caret-down-outline"></ion-icon>
                            <ion-icon class="up" name="caret-up-outline"></ion-icon>
                        </a>
                        <div class="answer">
                            <p>
                                There are no prerequisites. Our courses are open to students of all backgrounds who are
                                18 years of age and older.
                                All courses are conducted in English. Video lectures include English subtitles and the
                                option to slow-down, pause, or
                                replay lectures for better retention. Discussion boards are a critical component of each
                                of our courses; therefore, we
                                suggest students have a conversational knowledge of English when pursuing a Certificate
                                of Completion. For any of the
                                art writing courses, students need to be 100% proficient in written English.
                            </p>
                        </div>
                    </div>
                    <div class={`accordian_item ${isActive3 ? 'active' : ''}`}>
                        <a href="#q3" class="link" onClick={toggleAccordion3}>
                            <p>Can I take more than one course at a time?</p>
                            <ion-icon class="down" name="caret-down-outline"></ion-icon>
                            <ion-icon class="up" name="caret-up-outline"></ion-icon>
                        </a>
                        <div class="answer">
                            <p>
                                If you are new to online learning, we recommend that you begin with one course. As our
                                courses are offered frequently
                                throughout the year, you can always come back and continue your studies with one or more
                                topics.
                            </p>
                        </div>
                    </div>
                    <div class={`accordian_item ${isActive4 ? 'active' : ''}`}>
                        <a href="#q4" class="link" onClick={toggleAccordion4}>
                            <p>My payment did not go through. What do I do?</p>
                            <ion-icon class="down" name="caret-down-outline"></ion-icon>
                            <ion-icon class="up" name="caret-up-outline"></ion-icon>
                        </a>
                        <div class="answer">
                            <p>
                                We apologize for this inconvenience. We encourage you to reach out to your financial
                                institution as further permissions
                                may be needed to complete the payment. You are also welcome to write to
                                online@sothebysinstitute.com for further
                                guidance. Please wait a full 24 hours before trying again. A strong Internet connection
                                and up-to-date browser are
                                strongly recommended
                            </p>
                        </div>
                    </div>
                    <div class={`accordian_item ${isActive5 ? 'active' : ''}`}>
                        <a href="#q5" class="link" onClick={toggleAccordion5}>
                            <p>Can I get a refund if I am unable to attend my Online Course?</p>
                            <ion-icon class="down" name="caret-down-outline"></ion-icon>
                            <ion-icon class="up" name="caret-up-outline"></ion-icon>
                        </a>
                        <div class="answer">
                            <p>
                                In order to be granted a full tuition refund, you must cancel your registration by
                                sending an email to
                                online@sothebysinstitute.com by 5:00 pm (your local time) 5 full business days before
                                the course’s start date. Please
                                note we are unable to reimburse for any currency conversion fees charged by your
                                credit-card issuer.
                            </p>
                        </div>
                    </div>
                    <div class={`accordian_item ${isActive6 ? 'active' : ''}`}>
                        <a href="#q6" class="link" onClick={toggleAccordion6}>
                            <p>How do I contact technical support during my course?</p>
                            <ion-icon class="down" name="caret-down-outline"></ion-icon>
                            <ion-icon class="up" name="caret-up-outline"></ion-icon>
                        </a>
                        <div class="answer">
                            <p>
                                For technical support, please email online.support@webook.com, 09:00 – 22:00 GMT, Monday
                                – Friday. We are
                                ready to help!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FeedbackSection