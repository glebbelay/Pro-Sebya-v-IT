import React from 'react'

import Header from '../components/start/Header'
import BannerSection from '../components/start/BannerSection'
import FeaturesSection from '../components/start/FeaturesSection'
import CoursesSection from '../components/start/CoursesSection'
import ExpertSection from '../components/start/ExpertSection'
import AboutSection from '../components/start/AboutSection'
import FeedbackSection from '../components/start/FeedbackSection'
import ContactSection from '../components/start/ContactSection'
import SubscribeSection from '../components/start/SubscribeSection'
import Footer from '../components/start/Footer'



function StartPage() {
  return (
    <>
    <Header/>
    <BannerSection/>
    <FeaturesSection/>
    <CoursesSection/>
    <ExpertSection/>
    <AboutSection/>
    <FeedbackSection/>
    <ContactSection/>
    <SubscribeSection/>
    <Footer/>
    </>
  )
}

export default StartPage