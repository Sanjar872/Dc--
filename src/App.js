import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import './App.css'
import Section from './Components/Section/Section'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
// import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
      {/* <About/> */}
      {/* <Section/> */}
      
    </div>
  )
}

export default App