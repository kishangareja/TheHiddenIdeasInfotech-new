import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import Service from '../components/Service'
import Logoslide from '../components/Logoslide'
import Process from '../components/Process'
import Count from '../components/Count'
import Choose from '../components/Choose'   
import Testimonial from '../components/Testimonial'
import Clientlogo from '../components/Clientlogo'
import Faq from '../components/Faq'


const Home = () => {
  return (
    <>
      <div >
        <Banner />
        <AboutUs />
        <Service />
        <Logoslide />
        <Process />
        <Count />
        <Choose />
        <Faq /> 
        <Testimonial />
        <Clientlogo />
      </div>
    </>
  )
}

export default Home
