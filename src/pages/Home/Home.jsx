import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../about/About'
import Contact from '../contact/Contact'
import Skills from '../Skills/Skills'

const Home = () => {
  return (
    <div className='home'>
      <HeroSection/>
      <About/>
      <Skills/> 
      <Contact/>
    </div>
  )
}

export default Home