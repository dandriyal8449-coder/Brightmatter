import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Companies from './components/Companies/Companies'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <Work />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App
