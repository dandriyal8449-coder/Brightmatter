import React from 'react'
import Hero from '../components/Hero/Hero'
import Companies from '../components/Companies/Companies'
import Services from '../components/Services/Services'
import Work from '../components/Work/Work'
import Team from '../components/Team/Team'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <main>
        <Hero />
        <Companies />
        <Services />
        <Work />
        <Team />
        <Contact />
    </main>
  )
}

export default Home